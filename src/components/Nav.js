import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';
import { Turn as Hamburger } from './Turn';
import useBoop from '../utils/useBoop';
import logo from '../assets/images/knanthony_logo.svg';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  font-family: 'Fredoka One';
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  button {
    background: transparent;
    border: none;
  }
  .mobileNavHidden {
    display: none;
  }
  .mobileNav {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: right;
  }
  .desktopNav {
    display: none;
  }
  li {
    order: 1;
    padding: 0.5rem 0px;
  }
  a {
    text-decoration: none;
    color: var(--black);
    padding: 0.3rem 0;
    &:hover,
    &:focus,
    &.active {
      background: var(--link-pink);
      color: #fff;
    }
  }
  .logoLink {
    &:hover,
    &:focus {
      background: transparent;
    }
  }
  .logo {
    max-width: 50px;
    width: 100%;
    min-width: 40px;
  }
  .trails-main {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    flex-basis: 100%;
    font-size: 1.4rem;
  }

  .trails-text {
    position: relative;
    width: 100%;
    will-change: transform, opacity;
    overflow: hidden;
  }

  .trails-text > div {
    overflow: hidden;
  }
  /* Media screen size */
  @media screen and (min-width: 768px) {
    button {
      display: none;
    }
    .mobileNav,
    .trails-main {
      display: none;
    }
    .desktopNav {
      display: flex;
      text-align: center;
      list-style: none;
      align-items: center;
      margin-top: --6rem;
      flex-basis: initial;
      font-size: initial;
    }
    li {
      padding: 0px 5px;
    }
  }
`;

const Trail = ({ open, children, ...props }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 30 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="trails-main" {...props}>
      <ul className={open ? 'mobileNav' : 'mobileNavHidden'}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.li
            key={`trail-li-${index}`}
            className='trails-text'
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.span style={{ height }}>{items[index]}</animated.span>
          </animated.li>
        ))}
      </ul>
    </div>
  );
};

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [style, trigger] = useBoop({ x: 2, y: 0, rotation: 0, scale: 1.2 });

  const toggleNav = useCallback(() => {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
  }, []);
  return (
    <NavStyles>
      <Link className="logoLink" to="/" onMouseEnter={trigger}>
        <animated.img
          style={style}
          className="logo"
          src={logo}
          alt="Home page"
        />
      </Link>
      <button
        onClick={toggleNav}
        aria-haspopup='true'
        aria-label='Open or Close the menu'
        aria-expanded={menuIsOpen ? 'true' : 'false'}
      >
        <Hamburger toggled={menuIsOpen} />
      </button>
      <Trail open={menuIsOpen}>
        <Link activeClassName='active' to='/writing'>
          Writing
        </Link>
        <Link activeClassName="active" to="/play">
          Play
        </Link>
        <Link activeClassName="active" to="/explorables">
          Explorables
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
      </Trail>
      <ul className='desktopNav'>
        <li>
          <Link activeClassName='active' to='/writing'>
            Writing
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/play">
            Play
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/explorables">
            Explorables
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
