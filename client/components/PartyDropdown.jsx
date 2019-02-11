import React from 'react';
import ReactDOM from 'react-dom';
import * as Styles from './styled.js';

const PartyDropdown = (props) => {
  return(
    <div>
      <Styles.partySelect onChange={(e) => {props.partyHandler(e)}}>
        <option value="1">For 1</option>
        <option value="2">For 2</option>
        <option value="3">For 3</option>
        <option selected value="4">For 4</option>
        <option value="5">For 5</option>
        <option value="6">For 6</option>
        <option value="7">For 7</option>
        <option value="8">For 8</option>
        <option value="9">For 9</option>
        <option value="10">For 10</option>
        <option value="11">For 11</option>
        <option value="12">For 12</option>
        <option value="13">For 13</option>
        <option value="14">For 14</option>
        <option value="15">For 15</option>
        <option value="16">For 16</option>
        <option value="17">For 17</option>
        <option value="18">For 18</option>
        <option value="19">For 19</option>
        <option value="20">For 20</option>
      </Styles.partySelect>
    </div>
  )
}

export default PartyDropdown;