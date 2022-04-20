import React, { useState, useEffect } from "react";
import Router from "next/router";
import Image from "next/image";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ImageIcon from '@mui/icons-material/Image';
import Typography from '@mui/material/Typography';

import useClasses from "../../@supplier-app/hooks/useClasses";
import data from "../../assets/data/data";
import styles from "../../assets/jss/supplier-material/components/listsStyle";


const Lists = () => {
    const classes = useClasses(styles);
    const [lists, setLists] = useState([]);

    const goToDetails = (data) => {
        Router.push({
            pathname: "/details",
            query: data,    
        });
    }

    useEffect(() => {
        setLists(fetchData());
    }, [])

    const fetchData = () => {
        return data;
    }

    return (
        <section>
            <div className={classes.listsContainer}>
                <div className={classes.innerContainer}>
                    <a className={classes.title}>
                        Taggable Assets
                    </a>
                    <List className={classes.list} >
                        {lists.map((list, index) => (
                            <ListItem key={list.id} onClick={() => goToDetails(list)} className={classes.listItem}>
                                <ListItemAvatar className={classes.avatarContainer}>
                                    {list.Image ? <Image src={list.image} alt=""/> : <ImageIcon className={classes.avatar} />}
                                    
                                </ListItemAvatar>
                                <ListItemText
                                    primary={list.Title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography>
                                                Asset Manufacturer: {list.AssetManufacturer}
                                            </Typography>
                                            <Typography>
                                                Serial Number: {list.SerialNumber}
                                            </Typography>
                                            <Typography>
                                                Asset Model: {list.AssetModel}
                                            </Typography>
                                            <Typography>
                                                Asset Tag ID: {list.AssetTagID}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        </section>
    );
};

export default Lists;