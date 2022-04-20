import React from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ImageIcon from '@mui/icons-material/Image';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

import useClasses from "../../@supplier-app/hooks/useClasses";
import data from "../../assets/data/data";
import styles from "../../assets/jss/supplier-material/components/detailStyle";



const Details = () => {
    const router = useRouter();
    const data = router.query;
    const classes = useClasses(styles);

    return (
        <section>
            <div className={classes.detailsContainer}>
                <div className={classes.innerContainer}>
                    <a className={classes.detailTitle}>
                        {data && data.Title}
                    </a>
                    <section className={classes.sectionContainer}>
                        <div className={classes.outputContainer}>
                            <Typography className={classes.label}>External Brand</Typography>
                            <Typography className={classes.output}>{data && data.ExternalBrand}</Typography>
                        </div>
                        <div className={classes.outputContainer}>
                            <Typography className={classes.label}>Asset Name</Typography>
                            <Typography className={classes.output}>{data && data.AssetName}</Typography>
                        </div>
                        <div className={classes.outputContainer}>
                            <Typography className={classes.label}>Asset Number</Typography>
                            <Typography className={classes.output}>{data && data.AssetNumber}</Typography>
                        </div>
                        <div className={classes.outputContainer}>
                            <Typography className={classes.label}>Status</Typography>
                            <Typography className={classes.output}>{data && data.Status}</Typography>
                        </div>
                    </section>
                    <section className={classes.sectionContainer}>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Serial Number"
                                    variant="standard"
                                    value={data && data.SerialNumber}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { color: 'lightGreen' } }} />} label="Unreadable" />
                                        </InputAdornment>,
                                    }}
                                />
                            </FormControl>
                            <Link href={"/"}>
                                <Typography className={classes.greenLabel}>Serial Number Reference Guide</Typography>
                            </Link>
                        </div>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Asset Manufacturer"
                                    variant="standard"
                                    value={data && data.AssetManufacturer}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Asset Model"
                                    variant="standard"
                                    value={data && data.AssetModel}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Description"
                                    variant="standard"
                                    value={data && data.Discription}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label={<p><span className={classes.asterisk}>*</span>In-Service Date</p>}
                                    variant="standard"
                                    value={data && data.InServiceDate}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Install Date(This Location)"
                                    variant="standard"
                                    value={data && data.InstallDate}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label={<p><span className={classes.asterisk}>*</span>Location</p>}
                                    variant="standard"
                                    value={data && data.Location}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Asset Tag ID"
                                    variant="standard"
                                    value={data && data.AssetTagID}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.outputContainer}>
                            <FormControlLabel
                                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: 'lightGreen' } }} />}
                                label="Review Completed"
                            />
                        </div>
                        <div className={classes.outputContainer}>
                            <Typography className={classes.output}>Image</Typography>
                            <ImageIcon className={classes.avatar} />
                        </div>
                        <Button
                            className={classes.outlinedButton}
                        >
                            Retire Assets
                        </Button>
                        <div className={classes.outputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    label={<p><span className={classes.asterisk}>*</span>Select Disposition Method</p>}
                                    variant="standard"
                                    value={data && data.DispositionMethod}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton aria-label="clear">
                                                    <ClearIcon />
                                                </IconButton>

                                            </InputAdornment>,
                                    }}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.outputContainer}>
                            <Typography className={classes.output}>Enter additional details here</Typography>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Details;