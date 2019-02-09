import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as Styles from './styled.js';

class Reservation extends React.Component {
  constructor(props){
    super(props)
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

            <Styles.partyHolder>
              <Styles.partyFont>Party Size</Styles.partyFont>
              <Styles.partySelect>Party dropdown goes here</Styles.partySelect>
            </Styles.partyHolder>

            {/* date and time are held in their own div in the row */}
            <Styles.datetimeHolder>
              <Styles.dateHolder>
                <Styles.dateFont>Date</Styles.dateFont>
                <Styles.dateDropdown>Dropdown goes here</Styles.dateDropdown>
              </Styles.dateHolder>

              <Styles.timeHolder>
                <Styles.timeFont>Time</Styles.timeFont>
                <Styles.timeDropDown>Time dropdown goes here</Styles.timeDropDown>
              </Styles.timeHolder>
            </Styles.datetimeHolder>
            
          </Styles.funcRow>

          {/* button */}
          <Styles.buttonHolder>
            <Styles.findTable>
              <span>Find a Table</span>
            </Styles.findTable>
          </Styles.buttonHolder>

        {/* Booked however many times - random */}
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