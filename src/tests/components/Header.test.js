import React from 'react';
import {Header} from '../../components/Header';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
//test header component
test('test for header',()=>{
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify');
});

//should log out on button click
test('should log out on button click',()=>{
    const startLogout=jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});