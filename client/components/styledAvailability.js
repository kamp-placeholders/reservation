// separate styled-components sheet for availabilty rendering logic
import styled from 'styled-components';

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 17px;
`
export const SelectFont = styled.span`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,
    Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`

// may need a holder for multiple dates
export const Date = styled.button`
  height: 45px;
  width: 85px;
  background-color: #da3743;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  text-size-adjust: 100%;
  color: #fff;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 0px 4px;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  font-family: BrandonText,-apple-system,
    BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica",
    Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  &:hover {
    background-color: #e15b64;
  };
`

export const NoTimesHolder = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,
    Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  margin: 5px;
  display: flex;
  justify-content: flex-start;
  background-color: #f1f2f4;
  padding: 5px;
  height: 42px;
  text-overflow: ellipsis;
`
export const NoTimesFont = styled.span`
  align-self: center;
  margin: 1px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`
export const NoGraphic = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 3px;
  height: 30px;
  width: 32px;
  background-image: url(https://i.imgur.com/EsED9Mr.png);
  background-size: contain;
`
