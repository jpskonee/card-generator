import { Container, Grid} from '@material-ui/core'
import React from 'react'
import PageButton from '../PageButton'
import PageHeader from '../PageHeader'
import SampleCard from '../SampleCard'
import AddIcon from '@material-ui/icons/Add';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Footer from '../Footer'

const BirthdayHome = () => {
    return (
        <Container maxWidth="lg">
        <div style={{padding: "4vw 0 0px"}}>
                
                <div style={{ padding: "3vw 0 0" }}>
                    <PageHeader
                        title="Birthday Card"
                    />
                </div>
                
             
                <div style={{ margin: "10vw auto 2vw" }}>
                <SampleCard
                  img1="https://i.pinimg.com/736x/d6/a7/e7/d6a7e7262289527a73d68f5d376dd53c.jpg"
                  img2="https://d12uoqa0c8grue.cloudfront.net/5639397_386645b1-4ba8-4aa8-b8bc-32f935df3004_1080x810.jpg"
                  img3="https://www.newidea.com.au/media/88949/tweet.jpg?width=720&center=0.0,0.0"
                  />
                </div>

             
                 <Grid container style={{display: "flex", justifyContent: "space-around", marginBottom: "20vh"}}>
                    <PageButton
                    name="Create"
                    icon={<AddIcon />}
                    link="/birthdaycardcreator"
                    />
                    <PageButton
                    name="View"
                    icon={<ViewModuleIcon />}
                    link="/tweet"
                    />      
                </Grid>

            
                <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={3} style={{ margin: "0px auto", fontFamily: "sans-serif" }}>
                <Footer />  
          </Grid>
          </Grid>
                

            </div>
        </Container>
    )
}

export default BirthdayHome
