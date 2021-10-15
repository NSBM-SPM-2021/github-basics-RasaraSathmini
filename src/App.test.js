import React from "react";
import { render, screen } from '@testing-library/react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm'; 


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


test('renders learn react link', () => {
  const wrapper = shallow(<Contact/>);
  expect(wrapper.find("h1").text()).toContain("Student Register");

  //const {getByText} = render(<Contact />);
  //const linkElement = getByText("Student Register");
  //expect(linkElement).toBeInTheDocument();
});

test('render a button', () => {
  const wrapper = shallow(<ContactForm/>);
  expect(wrapper.find("#submit"));
});
