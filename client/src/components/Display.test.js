import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './Display'

describe('<Display />', () =>{
    it('renders without crashing', () =>{
      render(<Display />);
    });
    it('should display Count', () =>{

const {getByText}= render(<Display />)

getByText(/count/i)
    })

    it('should display balls and strikes', () =>{

const {getByText}=render(<Display />)

getByText(/balls/i)
getByText(/strikes/i)
    })
});