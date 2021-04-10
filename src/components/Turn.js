import React from 'react';
import { Burger } from './Burger';
// From hamburger-react: https://github.com/luukdv/hamburger-react/blob/master/src/Turn.tsx

export const Turn = (props) => (
  <Burger
    {...props}
    render={(o) => (
      <div
        className='hamburger-react'
        aria-hidden='true'
        data-testid='turn'
        style={o.burgerStyles}
      >
        <div
          style={{
            ...o.barStyles,
            width: `${o.width}px`,
            top: `${o.topOffset}px`,
            transition: `${o.time}s ${o.easing}`,
            transform: `${
              o.isToggled
                ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${
                    o.move * (o.isLeft ? -1 : 1)
                  }px, ${o.move}px)`
                : 'none'
            }`,
          }}
        />

        <div
          style={{
            ...o.barStyles,
            width: `${o.width}px`,
            top: `${o.topOffset + o.barHeight + o.margin}px`,
            transition: `${o.time / 2}s ${o.easing}`,
            transform: `${o.isToggled ? 'scaleX(0)' : 'none'}`,
          }}
        />

        <div
          style={{
            ...o.barStyles,
            width: `${o.width}px`,
            top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
            transition: `${o.time}s ${o.easing}`,
            transform: `${
              o.isToggled
                ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${
                    o.move * (o.isLeft ? -1 : 1)
                  }px, ${o.move * -1}px)`
                : 'none'
            }`,
          }}
        />
      </div>
    )}
  />
);
