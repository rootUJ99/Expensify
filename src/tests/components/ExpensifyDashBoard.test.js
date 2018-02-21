import React from 'react';
import ExpensifyDashBoard from '../../components/ExpensifyDashBoard';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
//testing dashboard component
test('testing dashboard component',()=>{
    const wrapper = shallow(<ExpensifyDashBoard />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});