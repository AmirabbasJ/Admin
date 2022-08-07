import React from 'react';
import classes from './PageTile.module.css'
const PageTile = (props) => {
    return ( 
        <h1 className={classes.Title}>
            {props.children} 
        </h1>
     );
}
 
export default PageTile;