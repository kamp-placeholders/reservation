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
    this.lastMonth = this.lastMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.renderDaysOfWeek = this.renderDaysOfWeek.bind(this);
  }

  renderMonth(){
    // renders header section month & buttons
    return(
      <Styles.calHeader>
        <Styles.headerLeft onClick={() => this.lastMonth()}></Styles.headerLeft>
        <Styles.monthFont>{moment(this.state.currMonth).format("MMMM YYYY")}</Styles.monthFont>
        <Styles.headerRight onClick={() => {this.nextMonth()}}></Styles.headerRight>
      </Styles.calHeader>
    )
  }

  renderDaysOfWeek(){
    return(
      <Styles.weekContainer>
        <Styles.weekDay>Sun</Styles.weekDay>
        <Styles.weekDay>Mon</Styles.weekDay>
        <Styles.weekDay>Tue</Styles.weekDay>
        <Styles.weekDay>Wed</Styles.weekDay>
        <Styles.weekDay>Thu</Styles.weekDay>
        <Styles.weekDay>Fri</Styles.weekDay>
        <Styles.weekDay>Sat</Styles.weekDay>
      </Styles.weekContainer>
    )
  }

  lastMonth(){
    // TODO
    const newMonth = moment(this.state.currMonth).subtract(1, 'month').format("MMMM YYYY");
    this.setState({
      currMonth: newMonth
    })
  }

  nextMonth(){
    // TODO
    const newMonth = moment(this.state.currMonth).add(1, 'month').format("MMMM YYYY");
    this.setState({
      currMonth: newMonth
    })
  }

  selectDate(){
    // TODO
  }

  render(){
    return(
      <Styles.calContainer>
        <div>{this.renderMonth()}</div>
        <div>{this.renderDaysOfWeek()}</div>
        <div>Calendar cells</div>
      </Styles.calContainer>
    )
  }
}

export default Calendar;