import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import NavbarLinks from "./NavbarLinks";
import { useClasses, useWindowSize } from "../../@supplier-app/hooks";
import Logo from "../../assets/svg/logo.js/Logo";
import styles from "../../assets/jss/supplier-material/components/navStyle";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { asPath } = useRouter();
  const classes = useClasses(styles, { open });
  const [width,] = useWindowSize();

  const handleClose = () => {
    open && setOpen(false);
  };

  useEffect(() => {
    open && setOpen(false);
  }, [width]);

  const goBack = () => {
    asPath.includes('details') ? Router.push('/') : null;
  }

  return (
    <>
      {/* Prevents layout shift when drawer is opened and closed */}
      {open && (
        <style jsx global>
          {`
            body {
              margin-right: 16px;
            }
          `}
        </style>
      )}

      <div className={classes.navbar}>
        <div className={classes.navbarContainer}>
          <a title="home" className={classes.goBack}>
            <ArrowBackIosNewIcon className={classes.iconWhitest} onClick={()=>goBack()}/>
          </a>

          <Link href={"/"}>
            <a title="home" className={classes.logoTitle}>
              {asPath.includes('details') ? "Asset Review" : "Store Asset Dashboard"}
            </a>
          </Link>

          <Button
            className={
              classes.navbarMenuButton
            }
            title="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon className={classes.iconWhitest} />
          </Button>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={open}
        className={classes.drawer}
        transitionDuration={500}
        onClose={handleClose}
      >
        <ul className={classes.drawerLinksContainer}>
          <li className={classes.drawerLogo}>
            <Link href={"/"}>
              <a title="home" onClick={() => setOpen(!open)}>
                <Logo viewBox="0 0 232 64" width={90} height={32} />
              </a>
            </Link>
          </li>
          <NavbarLinks
            onClick={() => setOpen(!open)}
            linkClass={classes.drawerLink}
          />
        </ul>
      </Drawer>
    </>
  );
};

export default NavBar;