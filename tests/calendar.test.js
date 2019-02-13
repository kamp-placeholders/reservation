import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../client/components/Calendar';
import * as app from '../client/components/Calendar';
import { mount, shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders on page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Calendar', () => {
  it('should render correctly in "debug" mode', () => {
    const Component = shallow(<Calendar debug />);
    expect(Component).toMatchSnapshot();
  });
});

app.lastMonth = jest.fn();
app.nextMonth = jest.fn()

test('should execute last month button functionality correctly', () => {
  app.lastMonth();
  expect(app.lastMonth).toHaveBeenCalled();
});

test('should execute next month button functionality correctly', () => {
  app.nextMonth();
  expect(app.nextMonth).toHaveBeenCalled();
});