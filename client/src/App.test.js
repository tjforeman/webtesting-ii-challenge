import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render,fireEvent,} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

describe('<App />' , () =>{


      it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

        it('should incriment the amount of balls by one',() => {
  const {getByText,getByTestId} = render(<App />);

  const balls = getByTestId('ball-count');

  const ballButton = getByText(/ball-thrown/i);

  fireEvent.click(ballButton);

  expect(balls.innerHTML).toBe('balls:1');
        })

        it('should incriment the amount of strikes by one',() => {
  const {getByText,getByTestId} = render(<App />);

  const strikes = getByTestId('strike-count');

  const strikeButton = getByText(/strike-thrown/i);

  fireEvent.click(strikeButton);

  expect(strikes.innerHTML).toBe('strikes:1');
        })

});
