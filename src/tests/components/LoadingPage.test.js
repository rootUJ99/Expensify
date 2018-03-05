import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
test('testing Loading screen', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});