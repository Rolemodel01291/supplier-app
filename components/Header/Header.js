import { useState } from "react";

import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';


import useClasses from "../../@supplier-app/hooks/useClasses";
import styles from "../../assets/jss/supplier-material/components/headerStyle";

const Header = () => {
    const classes = useClasses(styles);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);


    return (
        <header className={classes.container}>
            <div className={classes.headerContainer}>
                <div className={classes.titleContainer}>
                    <h1 className={classes.title}>
                        Store
                    </h1>
                </div>

                <div className={classes.subTitleContainer}>
                    <p className={classes.subTitle}>
                        10001-Tully & King - San Jose, CA
                    </p>
                </div>

                <div className={classes.optionContainer}>
                    <div className={classes.switch}>
                        <Switch className={classes.switchButton} />
                        <a className={classes.subTitle}>Hide Completed</a>
                    </div>
                    <div className={classes.resultOption}>
                        <a className={classes.subTitle}>0 Completed</a>
                    </div>
                </div>

                <div className={classes.buttonContainer}>
                    <Button onClick={handleOpen} className={classes.outlinedButton}>
                        Complete Review
                    </Button>
                    <Button onClick={handleOpen} className={classes.outlinedButton}>
                        Retire Review
                    </Button>

                    <Button onClick={handleOpen} className={classes.outlinedButton}>
                        Add Asset
                    </Button>
                </div>

                <div className={classes.notificationContainer}>
                    <a className={classes.smallTitle}>
                        This asset review was created by Brian Kackley.
                        Please select Retire Review to begin a new asset review for this store
                    </a>
                </div>

                <div className={classes.searchBarContainer}>
                    <FormControl fullWidth variant="filled">
                        <TextField
                            className={classes.textField}
                            placeholder="Search For An Asset"
                            variant="filled"
                            color="success"
                            hiddenLabel
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>,
                            }}
                        />
                    </FormControl>
                </div>
            </div>
        </header>
    );
};

export default Header;