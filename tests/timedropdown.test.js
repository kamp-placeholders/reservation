import React from 'react';
import ReactDOM from 'react-dom';
import TimeDropdown from '../client/components/TimeDropdown.jsx';
import { mount, shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

it('renders on page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeDropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render correctly with no props', () => {
  const component = shallow(<TimeDropdown />);
  expect(component).toMatchSnapshot();
});
