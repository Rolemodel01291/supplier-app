import PropTypes from 'prop-types';

import NavLink from "./NavLink";
import useClasses from "../../@supplier-app/hooks/useClasses";
import styles from "../../assets/jss/supplier-material/components/navStyle";

const NavbarLinks = ({ onClick, linkClass }) => {
  const classes = useClasses(styles);

  return (
    <>
      <li sx={linkClass}>
        <NavLink activeClassName={classes.navbarLinkActive} href={"/pricing"}>
          <a onClick={onClick}>Pricing</a>
        </NavLink>
      </li>

      <li sx={linkClass}>
        <NavLink
          activeClassName={classes.navbarLinkActive}
          href={"/auth"}
        >
          <a onClick={onClick}>Sign In</a>
        </NavLink>
      </li>
    </>
  );
};

NavbarLinks.propTypes = {
  onClick: PropTypes.func,
  linkClass: PropTypes.string
}

export default NavbarLinks;
