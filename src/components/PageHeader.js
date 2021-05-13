import React from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const PageHeader = (props) => {
    return (
        <div>
              <div className="glass-bg" style={{
                        margin: "0px auto",
                        fontSize: "4.0vw",
                        padding: '14px 0px',
                        color: "black",
                        width: "100%",
                        marginBottom: "50px",
                        fontFamily: "'Press Start 2P', cursive",
                    
                     }}> {props.title} <span> <AddAPhotoIcon  style={{fontSize: "6vw", color: "#876813"}} /> </span> </div>
        </div>
    )
}

export default PageHeader
