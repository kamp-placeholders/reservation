import React from 'react';
import ReactDOM from 'react-dom';
import PartyDropdown from '../client/components/PartyDropdown';
import { mount, shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

it('renders on page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PartyDropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render correctly with no props', () => {
  const component = shallow(<PartyDropdown />);
  expect(component).toMatchSnapshot();
});