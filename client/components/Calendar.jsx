import React from 'react';
import * as Styles from './styled.js';

class Calendar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div>Month Header placeholder</div>
        <div>Days of Week placeholder</div>
        <div>Calendar cells</div>
      </div>
    )
  }
}

export default Calendar;