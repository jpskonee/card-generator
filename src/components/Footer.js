import React, {useState} from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    const [designer, setDesigner ] = useState(false);
  const handleDesigner = (e) => {
    setDesigner(!designer);
    e.preventDefault()
  }
    return (
        <div >
            {designer && <div style={{
                width: "vh",
                paddingTop: "5px" ,
                height: "90px",
                margin: "auto auto",
                borderRadius: '10px',
              }}>

                <div className="glass-bg"style={{
                display: 'flex',
                justifyContent: "center", width: "wrap-content"}}>
                  <div style={{ marginRight: "15px", marginLeft: "15px", padding: "5px 5px" }}>
                  <a href="https://twitter.com/Agho_Dev" target="blank"> <TwitterIcon style={{fontSize:"25px", color:"#5db2f7"}} /> </a> 
              </div>
                <div style={{marginRight:"15px", marginLeft:"5px", padding: "5px 5px"}}>
                  <a href="https://github.com/jpskonee" target="blank"> <GitHubIcon style={{fontSize:"25px", color:"black"}} /> </a> 
              </div>
                <div style={{marginRight:"15px", marginLeft:"5px", padding: "5px 5px"}}>
                  <a href="http://wa.link/7g9grh" target="blank"> <WhatsAppIcon style={{fontSize:"25px", color:"#2ed73d"}} /> </a> 
              </div>
                <div style={{marginRight:"15px", marginLeft:"5px", padding: "5px 5px"}}>
                  <a href="https://www.facebook.com/wapemma" target="blank"> <FacebookIcon style={{fontSize:"25px", color:"#3c51a5"}} /> </a> 
              </div>
                <div style={{marginRight:"15px", marginLeft:"5px", padding: "5px 5px"}}>
                  <a href="https://www.linkedin.com/in/agho-dev/" target="blank"> <LinkedInIcon style={{fontSize:"25px", color:"#5db2f7"}} /> </a> 
                  </div>
                </div>
              <hr />
                <div style={{color: "white"}}> @AGHO.DEV </div>
           </div>}
                
             <div >
                <button onClick={handleDesigner} style={{
                              color: "white",
                              backgroundColor: "black",
                                padding: "15px 15px",
                                position: "fixed",
                                bottom: "0",
                                left: "0",
                                right: "0",
                                width: "100%",
                }}> <div className="designer-btn tooltip">DESIGNER</div> </button>
              </div>
        </div>
    )
}

export default Footer
