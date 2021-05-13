import React from 'react'
import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid';


const PageButton = (props) => {
    return (
        <div>
        <Grid  container spacing={2} style={{marginTop: "40px"}}>
            <Link to={props.link}>
            <Grid item xs={12} md={12} sm={6} lg={6}>
              <button  onClick={props.click} className="btn" > {props.name}  {props.icon} </button>
                </Grid>
            </Link>   
        </Grid>
        </div>
    )
}

export default PageButton
