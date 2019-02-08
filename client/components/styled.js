import styled from 'styled-components';

// find top fonts
export const Container = styled.div`
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  flex-direction: row;
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
  width: 450px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1em;
  border-bottom: 1px solid rgb(216, 217, 219);
`
export const ResWriting = styled.div`
  font-weight: 600px;
  line-height: 25px;
`
export const subContainer = styled.div`
  width: 450px;
  padding: 8px 16px 16px 16px;
  display: flex;
  justify-content: center;
`

export const funcRow = styled.div`
  width: 425px;
  display: flex;
  flex-wrap: wrap;
`
export const partyHolder = styled.div`
  width: 450px;
  height: 55px;
`
export const partyFont = styled.div`
  font-weight: 575;
  font-size: .850rem;
  padding: .20rem;
  justify-content: flex-start;
`

// IN MAJOR PROGRESS
export const partySelect = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  font-size: .900rem;
  font-weight: 400;
  padding-left: .20rem;
  padding-top: 8px;
`

// IN MAJOR PROGRESS
export const datetimeHolder = styled.div`
  display: flex;
  margin-left: .5rem;
`
