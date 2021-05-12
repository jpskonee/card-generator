import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
 
const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
    }
}));

const BirthdayCardCreator = (props) => {
  const classes = useStyles();

  const [designer, setDesigner ] = useState(false);
  const handleDesigner = (e) => {
    setDesigner(!designer);
    e.preventDefault()
  }

    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      
        <div  className={classes.root} style={{padding: "70px 0"}} >
                     <div style={{
                        margin: "0px auto",
                        fontSize: "3.5vw",
                        padding: '20px 10px',
                        backgroundColor: "black",
                        color: "white",
                        width: "100%",
                        marginBottom: "100px",
                        fontFamily: "'Press Start 2P', cursive",
                        textDecoration: "uppercase"
                    
                     }}> Create Card <span> <CloudDownloadIcon style={{fontSize: "3.7vw", marginLeft: "20px"}} /> </span></div>
            
            
        <Grid  container spacing={2} style={{marginTop: "60px"}}>
        <Grid item xs={12} sm={6} lg={4}>
            <div> Instructiion </div>
        </Grid>
        <Grid item  xs={12} sm={6} lg={4}>
          <div>inputs</div>
        </Grid>
        <Grid item  xs={12} sm={6} lg={4}>
          <div>sample</div>
        </Grid>
                        
        
                        
                 {designer && <div style={{
                width: "wrap-content",
                height: "80px",
                margin: "9px auto 9px",
                backgroundColor: "white",
                borderRadius: '10px',
              }}>

                <div style={{
                display: 'flex',
                justifyContent: "center",}}>
                  <div style={{ marginRight: "15px", marginLeft: "15px", padding: "7px 7px" }}>
                  <a href="https://twitter.com/Agho_Dev" target="blank"> <TwitterIcon style={{fontSize:"35px", color:"#5db2f7"}} /> </a> 
              </div>
                <div style={{marginRight:"15px", marginLeft:"15px", padding: "7px 7px"}}>
                  <a href="https://github.com/jpskonee" target="blank"> <GitHubIcon style={{fontSize:"35px", color:"black"}} /> </a> 
              </div>
                <div style={{marginRight:"15px", marginLeft:"15px", padding: "7px 7px"}}>
                  <a href="http://wa.link/7g9grh" target="blank"> <WhatsAppIcon style={{fontSize:"35px", color:"#2ed73d"}} /> </a> 
              </div>
                <div style={{marginRight:"15px", marginLeft:"15px", padding: "7px 7px"}}>
                  <a href="https://www.facebook.com/wapemma" target="blank"> <FacebookIcon style={{fontSize:"35px", color:"#3c51a5"}} /> </a> 
              </div>
                <div style={{marginRight:"15px", marginLeft:"15px", padding: "7px 7px"}}>
                  <a href="https://www.linkedin.com/in/agho-dev/" target="blank"> <LinkedInIcon style={{fontSize:"35px", color:"#5db2f7"}} /> </a> 
                  </div>
                </div>
              
                <div> @AGHO.DEV </div>
           </div>}
        
        
        
        <Grid item xs={12} sm={12} lg={12}>
                            
                <button onClick={handleDesigner} style={{
                              color: "white",
                              backgroundColor: "black",
                                padding: "15px 15px",
                                position: "fixed",
                                bottom: "0",
                                left: "0",
                                right: "0",
                                width: "100%",
                }}> <div className="designer-btn tooltip">DESIGNER
                   <span className="tooltiptext"> Click</span>
                 </div> </button>
              </Grid>

              
            </Grid>
                    
            </div>
        </Container>
    </React.Fragment>
  );
}

export default  BirthdayCardCreator
