import React from 'react';
import NotFound from '../../components/NotFound';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
//test notFound component
test('testing NotFound component', () => {
    const wrapper = shallow(<NotFound />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});