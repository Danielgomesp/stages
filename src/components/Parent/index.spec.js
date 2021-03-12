import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Parent from './index';

describe('Parent', () => {
  it('Should render Parent and one Child on the screen', () => {
    const { container } = render(<Parent />);
    expect(container).toMatchSnapshot();
  });

  it('Should render all 4 Childs on the screen', () => {
    jest.useFakeTimers();

    render(<Parent />);

    act(() => {
      jest.runAllTimers(); // trigger setTimeout
    });
    expect(screen.getAllByTestId('ChildElement')).toHaveLength(2);

    act(() => {
      jest.runAllTimers(); // trigger setTimeout
    });
    expect(screen.getAllByTestId('ChildElement')).toHaveLength(3);

    act(() => {
      jest.runAllTimers(); // trigger setTimeout
    });
    expect(screen.getAllByTestId('ChildElement')).toHaveLength(4);

    act(() => {
      jest.runAllTimers();
    });

  });

  it('Should render a final message on Parent', () => {
    render(<Parent />);

    act(() => {
      jest.runAllTimers(); // trigger setTimeout
    });

    expect(screen.getByAltText('OMG, we should hire him')).toBeDefined();
  })
});
