import {
  container,
  content,
  title,
  whiteColor,
  grayRGBA,
  grayColor,
} from "../../supplier-material";

const listsStyles = {
  title,
  listsContainer: {
    ...container,
    marginTop: "-100px",
    padding: "0 10px",
  },
  innerContainer: {
    ...content,
    backgroundColor: grayColor[10],
    marginBottom: "0px",
    borderRadius: "0px",
    padding: "5px 0"
  },
  list: {
    display: "flex",
    backgroundColor: whiteColor,
    flexDirection: "column",
  },
  listItem: {
    border: `1px solid ${grayRGBA[3]}`,
    cursor: 'pointer',
  },
  avatarContainer: {
    alignSelf: "baseline",
  },
  avatar: {
    width: "100px",
    height: "100px",
    marginLeft: '-20px'
  }

};

export default listsStyles;
