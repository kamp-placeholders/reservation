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
        <Styles.Header>
          <Styles.ResWriting>
          <h3>Make a reservation</h3>
          </Styles.ResWriting>
        </Styles.Header>

        do you come here often?

        <Styles.subContainer>
          <Styles.funcRow>

            <Styles.partyHolder>
              <Styles.partyFont>Party Size</Styles.partyFont>
              <Styles.partySelect>select placeholder</Styles.partySelect>
            </Styles.partyHolder>

            <Styles.datetimeHolder>Date tesjfigbrfeondb</Styles.datetimeHolder>
            
          </Styles.funcRow>
        </Styles.subContainer>
      </Styles.Container>
    )
  }
};

export default Reservation;