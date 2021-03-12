import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Child from './index';

function MockFn() {
  return true;
}

describe('Component: Child', () => {
  it('Should find the Child component', () => {
    const { getByTestId } = render(
      <Child
        color="blue"
        callBackHandler={MockFn}
        duration={1000}
      />,
    );
    const result = screen.getByTestId('ChildElement');
    expect(result).toBeInTheDocument();
  });
});
