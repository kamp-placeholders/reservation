import React from 'react';
import {CircleSpinner} from 'react-spinners-kit';
import * as Styles from './styled.js'

class Spinner extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    const loading = true;
    return(
      <Styles.SpinnerHolder>

        <CircleSpinner 
          size={30}
          color="#da3743"
          loading={loading}/>
      </Styles.SpinnerHolder>
    )
  }
}

export default Spinner;