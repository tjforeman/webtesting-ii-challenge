import React from 'react';
import { render, getByTestId } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard'
import Display from './Display'

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
      render(<Dashboard />);
    });

});