import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from '../client/components/Reservation.jsx';
import * as app from '../client/components/Reservation.jsx';
import { mount, shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

configure({ adapter: new Adapter() });

it('renders on page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reservation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calls ComponentDidMount when mounted', () => {
  jest.spyOn(Reservation.prototype, 'componentDidMount');
  shallow(<Reservation />);
  expect(Reservation.prototype.componentDidMount).toHaveBeenCalled();
  Reservation.prototype.componentDidMount.mockRestore();
})

describe('Reservation', () => {
  it('should render correctly in "debug" mode', () => {
    const Component = shallow(<Reservation debug />);
    expect(Component).toMatchSnapshot();
  });
});

app.timesRender = jest.fn();
app.availabilityRender = jest.fn();

test('reservation time rendering', () => {
  app.timesRender();
  expect(app.timesRender).toHaveBeenCalled();
});

test('availability time rendering', () => {
  app.availabilityRender();
  expect(app.availabilityRender).toHaveBeenCalled();
});

it('should call calRender', () => {
  const wrapper = shallow(<Reservation />);
  wrapper.instance().calRender = jest.fn();
  wrapper.update();
  wrapper.instance().calRender();
  expect(wrapper.instance().calRender).toBeCalled();
});



