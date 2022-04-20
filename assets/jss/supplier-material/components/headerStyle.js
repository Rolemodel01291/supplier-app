import {
    breakpoints,
    container,
    title,
    subTitle,
    smallTitle,
    button,
    greenColor,
    whiteColor,
    fontSizes,
    backdrop,
    grayRGBA,
    grayColor,
    warningColor,
  } from "../../supplier-material";
  
  const headerStyles = {
    backdrop,
    container: {
      ...container,
    },
    headerContainer: {
      margin: "12px 10px 120px 10px",
      [breakpoints.up.md]: {
        margin: "24px 10px 120px 10px",
      },
    },
    titleContainer: {
      maxWidth: "400px",
      margin: "0 0 10px 0",
      [breakpoints.up.md]: {
        maxWidth: "600px",
      },
    },
    subTitleContainer: {
      margin: "0 0 10px 0",  
      maxWidth: "450px",
      [breakpoints.up.md]: {
        maxWidth: "700px",
      },
    },
    optionContainer: {
      margin: "0 0 30px 0", 
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center', 
      justifyContent: "space-between",
    },
    
    buttonContainer: {
      margin: "0 0 20px 0",  
      display: "flex",
      justifyContent: "end",
    },

    notificationContainer: {
      margin: "0 0 10px 0",
      display: 'flex',
      backgroundColor: warningColor[4],
      padding: '12px 24px',
      borderLeft: `10px solid ${warningColor[5]}`,
      [breakpoints.down.sm]: {
          padding: '6px 12px',
      }
    },

    searchBarContainer: {
      backgroundColor: grayColor[10],
      padding: '15px',
    },
    
    outlinedButton: {
      ...button,
      lineHeight: 1,
      fontStyle: "normal",
      borderRadius: "10px",
      margin: "0 0 0 18px",
      padding: "24px 32px",
      whiteSpace: "nowrap",
      color: greenColor[1],
      border: `2px solid ${grayColor[2]}`,
      [breakpoints.down.sm]: {
        margin: "0 0 0 5px",
        fontSize: fontSizes[0],
      },
    },
    switch: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center'
      },
    switchButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultOption: {
        ...subTitle,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'end',
    },
    textField: {
        backgroundColor: whiteColor,
        fontSize: fontSizes[2],
    },
    title: {
      ...title,
      textAlign: "start",
    },
    subTitle: {
      ...subTitle,
      textAlign: "start",
    },
    smallTitle: {
      ...smallTitle,
      textAlign: "start",
    },
    backDrop: {
      backgroundColor: grayRGBA[4],
    },
  };
  
  export default headerStyles;
  