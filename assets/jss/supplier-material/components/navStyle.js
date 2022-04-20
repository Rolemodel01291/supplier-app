import {
    breakpoints,
    whiteColor,
    button,
    text,
    container,
    iconWhitest,
    iconLightest,
    grayRGBA,
    fontSizes,
  } from "../../supplier-material"
  
  const navStyle = {
    navbar: {
      position: "-webkit-sticky",
      // eslint-disable-next-line no-dupe-keys
      position: "sticky",
      backgroundColor: "#00703c",
      top: 0,
      zIndex: 200,
    },
    navbarContainer: {
      ...container,
      display: "flex",
      justifyContent: "space-between",
      borderBottom: `4px solid ${grayRGBA[1]}`,
      paddingBottom: "20px",
      paddingTop: "24px",
      // margin: "auto",
    },
    navbarMenuButton: {
      display: "none",
      width: "32px",
      padding: "5px 5px",
      minWidth: "fit-content",
      display: "block",
    },
    iconLightest,
    iconWhitest,
    button: {
      ...button,
      ...text,
      borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
    },
    drawerLinksContainer: {
      padding: "86px 24px",
      width: "295px",
    },
    navbarLinksContainer: {
      display: "flex",
      [breakpoints.down.sm]: {
        display: "none",
      },
    },
    navbarLink: {
      ...text,
      marginLeft: "24px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
    },
    goBack: {
      ...text,
      display: "flex",
      flexDirection: "column",
      alignContent: "start",
    },
    logoTitle: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      margin: '0 auto',
      fontSize: fontSizes[4],
      color: whiteColor,
      [breakpoints.down.sm]: {
        fontSize: fontSizes[2]
      },
    },
    drawerLink: {
      ...text,
      padding: "0 0 24px 0",
      marginTop: "24px",
      marginLeft: "0",
      display: "block",
      borderBottom: `1px solid ${grayRGBA[2]}`,
      "& > a": {
        display: "block",
      },
    },
    navbarLinkActive: {
      // color: greenColor[0],
    },
    listItem: {
      listStyle: "none",
    },
    drawerLogo: {
      ...text,
      padding: "24px 0",
      marginLeft: "0",
      display: "block",
      borderBottom: "none",
    },
  };
  
  export default navStyle;
  