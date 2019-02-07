import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      <div>
        Hello from React!
      </div>
    )
  }
};

export default Reservation;