import styled from 'styled-components';
import moment from 'moment';

// find top fonts
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px 0.3px rgba(153,153,153,.4);
  font-family: BrandonText,-apple-system,
    BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica",
    Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  webkit-font-smoothing: antialiased;
`
export const Header = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1em;
  margin-top: 8px;
`
export const ResWriting = styled.div`
  font-weight: 600px;
  line-height: 25px;
  border-bottom: 1px solid rgb(216, 217, 219);
  margin-left: 15px;
  margin-right: 15px;
`
export const subContainer = styled.div`
  width: 100%;
  padding: 8px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const funcRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const partyHolder = styled.div`
  // display: flex;
  height: 55px;
  padding-bottom: 0.25rem;
  padding-top: 0.35rem;
  
  flex: 1 50%;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 12px;
`
export const partyFont = styled.div`
  font-weight: 675;
  font-size: .850rem;
  padding: .20rem;
  justify-content: flex-start;
`

// IN PROGRESS
export const partySelect = styled.select`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  font-size: .900rem;
  font-weight: 400;
  padding-left: .20rem;
  padding-top: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  display: block;
  font-family: inherit;
  background-color: #fff;
  height: 35px;
  border-radius: 0;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 8px;
  -webkit-appearance: none;
  width: 95%;
  &:hover {
    border-bottom: 2px solid #da3743;
  };
  &:focus {
    border-bottom: 2px solid #da3743;
  };
`

// IN PROGRESS
export const datetimeHolder = styled.div`
  display: flex;
  margin-left: .17rem;
  flex: 1 100%;
  -webkit-box-flex: 1;
  margin-top: 18px;
`

export const dateHolder = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  margin-left: 15px;
`

export const dateFont = styled.div`
  font-size: .900rem;
  font-weight: 575;
  padding-bottom: .32rem;
`

export const dateDropdown = styled.div`
  cursor: pointer;
  position: relative;
  height: 35px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #d8d9db;
  padding-top: .15rem;
  border-right: none;
  margin-top: 7px;
  &:hover {
    border-bottom: 2px solid #da3743;
  };
  &:focus {
    border-bottom: 2px solid #da3743;
  };
`
// MAY NEED ANOTHER FONT DIV FOR INSIDE THE BOX

// NEED AN ENTIRE SECTION FOR THE CALENDAR COMPONENT

// separate from elements in dateHolder but still in dateTimeHolder
export const timeHolder = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  margin-left: .5rem;
  margin-right: 15px;
`

export const timeFont = styled.div`
  font-size: .900rem;
  font-weight: 575;
  padding-bottom: .32rem;
`

export const timeDropDown = styled.select`
  cursor: pointer;
  position: relative;
  height: 35px;
  width: 100%;
  box-sizing: border-box;
  padding-top: .15rem;
  border: none;
  margin-top: 7px;
  border-bottom: 1px solid #d8d9db;
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 0;
  padding-left: .20rem;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    border-bottom: 2px solid #da3743;
  };
  &:focus {
    border-bottom: 2px solid #da3743;
  };
`
export const buttonHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const findTable = styled.button`
  padding: .75rem 1rem;
  background-color: #da3743;
  color: white;
  border: none;
  line-height: 1.5;
  margin: 8px 15px;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e15b64;
  }
`
export const SpinnerHolder = styled.span`
  align-self: center;
  margin-top: 3px;
`

export const bookHolder = styled.div`
  display: flex;
  margin-left: 24px;
  margin-top: 22px;
  margin-bottom: 18px;
`


export const graphic = styled.div`
  width: 31px;
  height: 24px;
  background-image: url(https://i.imgur.com/7WByhjD.png);
  background-size: contain;
`
export const bookFont = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 550;
  margin-left: 8px;
`

////////////////////////////////
// CALENDAR CSS STYLING BELOW //
////////////////////////////////

export const calContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // width & color subject to change 
  width: 96%;
  background-color: #f1f2f4;
  -webkit-font-smoothing: anti-aliased;
  border: 1px solid #d8d9db;
  justify-content: center;
`

export const calHeader = styled.div`
  display: flex;
  height: 34px;
  margin: 15px 5px;
  font-weight: 700;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`
export const monthFont = styled.span`
  margin-left: 15px;
  margin-right: 15px;
`

export const headerLeft = styled.div`
  height: 32px;
  width: 32px;
  transform: scaleX(-1);
  border-radius: 50%;
  border: 1px solid #d8d9db;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 6px 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
  viewBox='0 0 5.24 8.07'%3E%3Cg%3E%3Cpath style='fill:%23338' 
  d='M5.09 3.68L4.39 3 1.56.15a.5.5 0 0 0-.71 0l-.7.7a.5.5 0 0 0 0 .71L2.62 4 .15 6.51a.5.5 0 0 0 0 
  .71l.71.71a.5.5 0 0 0 .71 0L4.39 5.1l.71-.71a.5.5 0 0 0-.01-.71z'/%3E%3C/g%3E%3C/svg%3E");
  box-sizing: border-box;
  margin: 10px;
  margin-left: 25px;
  cursor: pointer;
  &:hover {
    border: 2px solid #da3743;
  }
`

export const headerLeftPresent = styled.div`
  height: 32px;
  width: 32px;
  transform: scaleX(-1);
  border-radius: 50%;
  border: 1px solid #d8d9db;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 6px 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
    viewBox='0 0 5.24 8.07'%3E%3Cg%3E%3Cpath style='fill:%23E1E1E1' d='M5.09 3.68L4.39 3 
    1.56.15a.5.5 0 0 0-.71 0l-.7.7a.5.5 0 0 0 0 .71L2.62 4 .15 6.51a.5.5 0 0 0 0 
    .71l.71.71a.5.5 0 0 0 .71 0L4.39 5.1l.71-.71a.5.5 0 0 0-.01-.71z'/%3E%3C/g%3E%3C/svg%3E");
  box-sizing: border-box;
  margin: 10px;
  margin-left: 25px;
  cursor: default;
  pointer-events: none;
`

export const headerRight = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid #d8d9db;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 6px 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
  viewBox='0 0 5.24 8.07'%3E%3Cg%3E%3Cpath style='fill:%23338' 
  d='M5.09 3.68L4.39 3 1.56.15a.5.5 0 0 0-.71 0l-.7.7a.5.5 0 0 0 0 .71L2.62 4 .15 6.51a.5.5 0 0 0 0 
  .71l.71.71a.5.5 0 0 0 .71 0L4.39 5.1l.71-.71a.5.5 0 0 0-.01-.71z'/%3E%3C/g%3E%3C/svg%3E");
  box-sizing: border-box;
  margin: 10px;
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    border: 2px solid #da3743;
  }
`
export const weekContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  margin-right: 5px;
  justify-content: space-evenly;
  line-height: 100px;
`
export const weekDay = styled.div`
  font-size: .875rem;
  text-align: center;
  line-height: 16px;
  padding: 3px;
  color: #2d333f;
`

// IN MAJOR PROGRESS
export const cellHolder = styled.div`
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  margin-bottom: 35px
  width: 90%;
`
// IN MAJOR PROGRESS
export const weeks = styled.div`
  display: table-row;
  line-height: 70px;
`

export const uniqDay = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  font-weight: 500;
  background-clip: padding-box;
  line-height: 45px;
  &:hover {
    border: 1px solid #da3743;
  }
  cursor: pointer;
  border: 1px solid #d8d9db;
`

export const uniqDayPast = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  border: 1px solid #d8d9db;
  font-weight: 500;
  background-clip: padding-box;
  line-height: 45px;
  &:hover {
    border: 1px solid #da3743;
  }
  color: #d8d9db;
  pointer-events: none;
`

export const uniqDaySameMonth = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  border: 1px solid #d8d9db;
  font-weight: 500;
  background-clip: padding-box;
  line-height: 45px;
  &:hover {
    border: ${props => props.selected ? '2px solid #da3743' : '1px solid #da3743'};
  }
  cursor: pointer;
  background-color: #fff;
  border: ${props => props.selected ? '2px solid #da3743' : 'null'};
`

export const uniqDaySameMonthPast = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  border: 1px solid #d8d9db;
  font-weight: 500;
  background-clip: padding-box;
  line-height: 45px;
  &:hover {
    border: 1px solid #da3743;
  }
  cursor: pointer;
  background-color: #fff;
  color: #d8d9db;
  pointer-events: none;
`

