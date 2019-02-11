import React from 'react';
import * as Styles from './styled.js';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currMonth: new Date(),
      currDate: new Date()
    }
    this.renderMonth = this.renderMonth.bind(this);
  }

  renderMonth(){
    // renders header section month & buttons
    return(
      <div>
        <div>Last month button placeholder</div>
        <div>{moment(this.state.currMonth).format("MMMM YYYY")}</div>
        <div>Next Month placeholder</div>
      </div>
    )
  }

  lastMonth(){
    // TODO
  }

  nextMonth(){
    // TODO
  }

  selectDate(){
    // TODO
  }

  render(){
    return(
      <Styles.calContainer>
        <div>{this.renderMonth()}</div>
        <div>Days of Week placeholder</div>
        <div>Calendar cells</div>
      </Styles.calContainer>
    )
  }
}

export default Calendar;