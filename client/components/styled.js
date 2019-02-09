import styled from 'styled-components';

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
  border-bottom: 1px solid #d8d9db;
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
export const partySelect = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  font-size: .900rem;
  font-weight: 400;
  padding-left: .20rem;
  padding-top: 8px;
`

// IN PROGRESS
export const datetimeHolder = styled.div`
  display: flex;
  margin-left: .17rem;
  flex: 1 100%;
  -webkit-box-flex: 1;
  margin-top: .45rem;
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

export const timeDropDown = styled.div`
  cursor: pointer;
  position: relative;
  height: 35px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #d8d9db;
  padding-top: .15rem;
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
`

export const bookHolder = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 15px;
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