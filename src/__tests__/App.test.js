import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('should not work the first time', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Link')).toHaveLength(1);
});
