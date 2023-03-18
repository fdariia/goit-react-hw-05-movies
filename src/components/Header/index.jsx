import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './styles.module.css';

const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: rgb(0, 0, 255);
  }
`;

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li>
            <StyledNavLink to="/" className={css.navLink}>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies" className={css.navLink}>
              Movies
            </StyledNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
