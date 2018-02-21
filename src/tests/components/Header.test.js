import React from 'react';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
//test header component
test('test for header',()=>{
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify');
});