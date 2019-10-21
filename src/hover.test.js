import React from 'react';
import ReactDOM from 'react-dom';
import { Hovercounter } from './Hovercounter';

it('hover renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hovercounter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

