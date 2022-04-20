import {
    breakpoints,
    container,
    content,
    title,
    subTitle,
    smallTitle,
    button,
    blackColor,
    whiteColor,
    fontSizes,
    greenColor,
    backdrop,
    grayRGBA,
    grayColor,
  } from "../../supplier-material";
  
  const detailStyle = {
    detailsContainer: {
      ...container,
      padding: "0 10px",
    },
    innerContainer: {
      ...content,
      marginBottom: "0px",
      borderRadius: "0px",
      padding: "5px 0",
      display: 'flex',
      flexDirection: "column",  
    },
    sectionContainer: {
      display: "flex",
    //   margin: "10px 0",
      flexDirection: "column",
    },
    outputContainer: {
      margin: '15px 0'
    },
    detailTitle: {
        ...title,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: fontSizes[3],
        color: grayRGBA[3],
        [breakpoints.down.sm]: {
            fontSize: fontSizes[1],
        },
    },
    label: {
        ...title,
        fontSize: fontSizes[1],
        [breakpoints.down.sm]: {
            fontSize: fontSizes[0],
        },
    },
    grayLabel: {
        ...subTitle,
        color: grayRGBA[4],
        fontSize: fontSizes[1],
        [breakpoints.down.sm]: {
            fontSize: fontSizes[0],
        }
    },
    greenLabel: {
        ...subTitle,
        color: greenColor[0],
        fontSize: fontSizes[1],
        marginTop: '10px',
        textDecoration: 'underline',
        [breakpoints.down.sm]: {
            fontSize: fontSizes[0],
        }
    },
    output: {
        ...subTitle,
        fontSize: fontSizes[1],
        [breakpoints.down.sm]: {
            fontSize: fontSizes[0],
        },
    },
    asterisk: {
        color:  'red',
        marginRight: '5px',
    },
    checkBox: {
        fontsize: fontSizes[5]
    },
    list: {
      display: "flex",
      backgroundColor: whiteColor,
      border: `2px solid ${grayRGBA[3]}`,
    },
    avatarContainer: {
      alignSelf: "baseline",
      marginTop: "5px",
    },
    avatar: {
      width: "150px",
      height: "150px",
      marginLeft: "-20px",
    },
    outlinedButton: {
        ...button,
        width: '100%',
        lineHeight: 1,
        fontStyle: "normal",
        padding: "6px 0",
        whiteSpace: "nowrap",
        color: grayRGBA[3],
        fontSize: fontSizes[1],
        [breakpoints.down.sm]: {
          margin: "0 0 0 5px",
          fontSize: fontSizes[0],
        },
      },
  
  };
  
  export default detailStyle;
  