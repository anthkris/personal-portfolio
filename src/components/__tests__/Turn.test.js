import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Turn as Hamburger } from '../Turn';

// Tests from https://github.com/luukdv/hamburger-react

describe('Hamburger menu', () => {
  it('fires the action', () => {
    const toggle = jest.fn();
    const menuIsOpen = false;
    render(
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="true"
        aria-label="Open or Close the menu"
        aria-expanded={menuIsOpen ? 'true' : 'false'}
      >
        <Hamburger toggled={false} />
      </button>
    );

    fireEvent.click(
      screen.getByRole('button', { name: /Open or Close the menu/i })
    );
    expect(toggle).toHaveBeenCalled();
  });
  it('inherits the color from its parent by default', () => {
    render(<Hamburger />);

    expect(screen.getByTestId('burger-bars')).toHaveStyle({
      background: 'currentColor',
    });
  });

  it('sets the correct color', () => {
    render(<Hamburger color="pink" />);

    expect(screen.getByTestId('burger-bars')).toHaveStyle({
      background: 'pink',
    });
  });
  it('animates to the left', () => {
    render(<Hamburger direction="left" toggled />);

    fireEvent.click(screen.getByTestId('turn'));
    expect(screen.getByTestId('burger-bars')).toHaveStyle({
      transform: 'rotate(-45deg) translate(-7.07px, 7.07px)',
    });
  });

  it('animates to the right', () => {
    render(<Hamburger direction="right" toggled />);

    fireEvent.click(screen.getByTestId('turn'));
    expect(screen.getByTestId('burger-bars')).toHaveStyle({
      transform: 'rotate(45deg) translate(7.07px, 7.07px)',
    });
  });
});
