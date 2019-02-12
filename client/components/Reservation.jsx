import React from 'react';
import axios from 'axios';
import moment from 'moment';
import * as Styles from './styled.js';
import PartyDropdown from './PartyDropdown.jsx';
import Calendar from './Calendar.jsx';
import TimeDropDown from './TimeDropdown.jsx';


class Reservation extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      size: "4",
      calendar: false,
      selectDate: moment().format('ddd, M/D')
    }
    this.partyHandler = this.partyHandler.bind(this);
    this.calRender = this.calRender.bind(this);
    this.dateRender = this.dateRender.bind(this);
  }

  // test connection and time retrieval with fake data
  componentDidMount(){
    axios.get('/api/reservations')
      .then((response) => {
        let timeArr = [];
        response.data.forEach((obj) => {
          timeArr.push(obj.time);
        })
        console.log(timeArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  partyHandler(event){
    this.setState({
      size: event.target.value
    })
  }

  timeHandler(){
    // TODO
  }

  calRender(){
    this.setState({
      calendar: !this.state.calendar
    })
  }

  dateRender(date){
    this.setState({
      selectDate: moment(date).format('ddd, M/D')
    })
    this.setState({
      calendar: !this.state.calendar
    })
  }

  render(){
    return(
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
                <Styles.dateDropdown onClick={() => {this.calRender()}}>{this.state.selectDate}</Styles.dateDropdown>
                {this.state.calendar ? (
                  <Calendar dateRender={this.dateRender}/>
                ) : (
                  null
                )}
              </Styles.dateHolder>

              <Styles.timeHolder>
                <Styles.timeFont>Time</Styles.timeFont>
                <TimeDropDown></TimeDropDown>
              </Styles.timeHolder>
            </Styles.datetimeHolder>
            
          </Styles.funcRow>

          {/* button div */}
          <Styles.buttonHolder>
            <Styles.findTable>
              <span>Find a Table</span>
            </Styles.findTable>
          </Styles.buttonHolder>

        {/* Booked X many times - random */}
        <Styles.bookHolder>
          <Styles.graphic>
          </Styles.graphic>
          <Styles.bookFont>Booked 60 times today</Styles.bookFont>
        </Styles.bookHolder>

        </Styles.subContainer>
      </Styles.Container>
    )
  }
};

export default Reservation;