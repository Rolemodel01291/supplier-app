import { makeStyles } from '@mui/styles';

const useClasses = (styles, props) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles(props);
  return classes;
};

export default useClasses;