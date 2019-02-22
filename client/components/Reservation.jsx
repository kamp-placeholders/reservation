import React from 'react';
import axios from 'axios';
import moment from 'moment';
import * as Styles from './styled.js';
import * as Availability from './styledAvailability.js';
import PartyDropdown from './PartyDropdown.jsx';
import Calendar from './Calendar.jsx';
import TimeDropDown from './TimeDropdown.jsx';
import Spinner from './Spinner.jsx';


class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: '4',
      calendar: false,
      selectDate: moment().format('ddd, M/D'),
      time: '09:00:00',
      randomBooking: '',
      showInitButton: true,
      available: true,
      loading: false,
      calDate: moment(),
      validTimes: []
    };
    this.partyHandler = this.partyHandler.bind(this);
    this.calRender = this.calRender.bind(this);
    this.dateRender = this.dateRender.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.availabilityRender = this.availabilityRender.bind(this);
    this.timesRender = this.timesRender.bind(this);
    this.dateSearch = this.dateSearch.bind(this);
  }

  // test connection and time retrieval with fake data
  componentDidMount() {
    let randomNumber = Math.floor(Math.random() * 115) + 21;
    this.setState({
      randomBooking: randomNumber
    });
  }

  partyHandler(event) {
    this.setState({
      size: event.target.value
    });
  }

  timeHandler(event) {
    this.setState({
      time: event.target.value
    });
  }

  calRender() {
    this.setState({
      calendar: !this.state.calendar
    });
  }

  dateRender(date) {
    this.setState({
      selectDate: moment(date).format('ddd, M/D')
    });
    this.setState({
      calDate: moment(date)
    });
    this.setState({
      calendar: !this.state.calendar
    });
  }

  dateSearch() {
    this.setState({
      showInitButton: true
    });
    this.setState({
      available: true
    });
  }

  availabilityRender() {
    let url;
    if (window.location.pathname === '/') {
      url = 1;
    } else {
      url = window.location.pathname;
    }
    
    this.setState({
      loading: true
    });
  
    axios.get(`http://reservation-dev.us-east-2.elasticbeanstalk.com/times${url}`)
      .then((response) => {
        let timeArr = [];
        response.data.forEach((obj) => {
          timeArr.push(obj.time);
        });
        let opening = moment(timeArr[0], 'hh:mm:ss').subtract(1, 's');
        let closing = moment(timeArr[1], 'hh:mm:ss');
        let request = moment(this.state.time, 'hh:mm:ss');

        // multiple times check for a valid or non-valid input
        let timesToCheck = [];
        let validTimesNew = [];
        let timeMinusHr = moment(this.state.time, 'hh:mm:ss').subtract(1, 'h');
        let timeMinusThirty = moment(this.state.time, 'hh:mm:ss').subtract(30, 'm');
        let timePlusHr = moment(this.state.time, 'hh:mm:ss').add(1, 'h');
        let timePlusThirty = moment(this.state.time, 'hh:mm:ss').add(30, 'm');

        timesToCheck.push(timeMinusHr, timeMinusThirty, request, timePlusThirty, timePlusHr);

        timesToCheck.forEach((timeBlock) => {
          if (moment(timeBlock).isBetween(opening, closing)) {
            validTimesNew.push(timeBlock);
          }
        });
        this.setState({
          validTimes: validTimesNew
        });
        
        // set the state of validTimes based on availability within 1 hour range
        if (this.state.validTimes.length) {
          this.setState({
            available: true
          });
          this.setState({
            showInitButton: !this.state.showInitButton
          });
        } else {
          this.setState({
            available: false
          });
          this.setState({
            showInitButton: !this.state.showInitButton
          });
        }

        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  timesRender() {
    let time = moment(this.state.time, 'HH:mm').format('h:mm A');
    let shown;
    if (this.state.available) {
      shown =
        <div>
          <Availability.SelectFont>
            <span>Select a time:</span>
          </Availability.SelectFont>
          <Availability.timesHolder>
            {this.state.validTimes.map((validTime) => {
              let showTime = moment(validTime, 'HH:mm').format('h:mm A');
              return (
                <Availability.Date>
                  {showTime}
                </Availability.Date>
              );
            })}
          </Availability.timesHolder>
        </div>;
    } else {
      shown = 
      <Availability.NoTimesHolder>
        <Availability.NoGraphic></Availability.NoGraphic>
        <Availability.NoTimesFont>
          At the moment, there's no online availability within 1 hour of {time}. Have 
          another time in mind?
        </Availability.NoTimesFont>
      </Availability.NoTimesHolder>;
    }
    return (
      <Availability.Holder>
        {shown}
      </Availability.Holder>
    );
  }

  render() {
    console.log('render hello');
    return (
      <Styles.Container>
        {/* header section */}
        <Styles.Header>
          <Styles.ResWriting>
            <h3>Make a reservation</h3>
          </Styles.ResWriting>
        </Styles.Header>

        {/* everything below Make a reservation header */}
        <Styles.subContainer>
          {/* functional inputs - party, date, time */}
          <Styles.funcRow>

            {/* Party size in the functional row div - but 
          separate from date/time div */}
            <Styles.partyHolder>
              <Styles.partyFont>Party Size</Styles.partyFont>
              <PartyDropdown partyHandler={this.partyHandler}></PartyDropdown>
            </Styles.partyHolder>

            {/* date and time are held in their own div in the row */}
            <Styles.datetimeHolder>
              <Styles.dateHolder>
                <Styles.dateFont>Date</Styles.dateFont>
                <Styles.dateDropdown onClick={() => { this.calRender(); }}>{this.state.selectDate}</Styles.dateDropdown>
                {this.state.calendar ? (
                  <Calendar selected={this.state.calDate} dateRender={this.dateRender}/>
                ) : (
                  null
                )}
              </Styles.dateHolder>

              <Styles.timeHolder>
                <Styles.timeFont>Time</Styles.timeFont>
                <TimeDropDown buttonDisplay={this.dateSearch} timeHandler={this.timeHandler}></TimeDropDown>
              </Styles.timeHolder>
            </Styles.datetimeHolder>
            
          </Styles.funcRow>

          {/* button div */}
          <Styles.buttonHolder>
            {this.state.showInitButton ? (
              <Styles.findTable onClick={() => { this.availabilityRender(); }}>
                <span>Find a Table</span>
              </Styles.findTable>
            ) : (
              this.state.loading ? <Spinner /> :
                this.timesRender()
            )}
          </Styles.buttonHolder>

          {/* Booked X many times - random */}
          <Styles.bookHolder>
            <Styles.graphic>
            </Styles.graphic>
            <Styles.bookFont>Booked {this.state.randomBooking} times today</Styles.bookFont>
          </Styles.bookHolder>

          {!this.state.available && !this.state.loading ? (
            <Availability.Next>Show next available</Availability.Next>
          ) : (
            null
          )}
        </Styles.subContainer>
      </Styles.Container>
    );
  }
}

export default Reservation;