import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CakeIcon from '@material-ui/icons/Cake';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import Footer from './Footer';
import SampleCard from './SampleCard';
import PageHeader from './PageHeader';
import PageButton from "./PageButton"


const HomeScreen = () => {

    return (
      
      <Container maxWidth="lg">
      
        <div style={{padding: "70px 0"}}>

            <div>
              <PageHeader
                title="Card Generator"
              />
            </div>
            


          <div style={{margin: "0 auto"}}>
                <SampleCard
                  img1="https://i.pinimg.com/736x/d6/a7/e7/d6a7e7262289527a73d68f5d376dd53c.jpg"
                  img2="https://d12uoqa0c8grue.cloudfront.net/5639397_386645b1-4ba8-4aa8-b8bc-32f935df3004_1080x810.jpg"
                  img3="https://www.newidea.com.au/media/88949/tweet.jpg?width=720&center=0.0,0.0"
                  />
            </div>

      
      
      <Grid container style={{display: "flex", justifyContent: "space-around"}}>
              <PageButton
                name="Birthday Cards"
                icon={<CakeIcon />}
                link="/birthday"
              />
              <PageButton
                name="Tweet Cards"
                icon={<PhotoSizeSelectActualIcon />}
                link="/tweet"
              />
              <PageButton
                name="Certificate Cards"
                icon={<CardMembershipIcon />}
                link="/certificate"
              />   
            </Grid>

            <Grid container spacing={2} style={{display: "flex", justifyContent: "space-around", marginBottom: "200px"}}>
                    <PageButton
                      name="Quote Cards"
                      icon={<QuestionAnswerIcon />}
                      link="/quote"
                    />
                    <PageButton
                      name="Buisness Cards"
                      icon={<ContactMailIcon />}
                      link="/buisness"
                    />
                    <PageButton
                      name="Campaign Cards"
                      icon={<EmojiPeopleIcon />}
                      link="/campaign"
                    />   
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={3} style={{ margin: "0px auto", fontFamily: "sans-serif" }}>
                <Footer />  
          </Grid>
          </Grid>
                 
        </div>
        </Container>
  );
}


export default HomeScreen;


