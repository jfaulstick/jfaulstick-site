import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders main app', () => {
  const element = render(<App />);
  expect(element).toMatchSnapshot();
});
