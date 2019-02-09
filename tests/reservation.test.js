import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from '../client/components/Reservation.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders on page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reservation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
