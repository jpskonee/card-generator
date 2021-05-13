import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import PageButton from '../PageButton';
import PageHeader from '../PageHeader';
import Footer from '../Footer';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { app } from "../../base";

const birthdayDB = app.firestore().collection("birthdayDB")


const BirthdayCardCreator = () => {

    const [cname, setCname] = useState("");
    const [nickname, setNickname] = useState("");
    const [day, setDay] = useState("1");
    const [month, setMonth] = useState("");
    const [bdmsg, setBdmsg] = useState("");
    const [wisher, setWisher] = useState("");
    const [photo, setPhoto] = useState(null);
    
    //getting the image url
    const handlePhoto = async (e) => {
        const file = e.target.files[0]
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setPhoto(await fileRef.getDownloadURL());
    }

    //pushing the img to the storage
    const pushData = async () => {
        await birthdayDB.doc().set({
            name: cname,
            nickname: nickname,
            day: day,
            month: month,
            bdmsg: bdmsg,
            wisher: wisher,
            avatar: photo,
            createdAt: Date.now().toLocaleString()
        });
    }


    const handleCname = (event) => {
        const newCname = event.target.value;
        setCname(newCname);
    }

    const handleChangeNickname = (event) => {
        const newNickname = event.target.value;
        setNickname(newNickname);
    }

    const handleDay = (event) => {
        const newDay = event.target.value;
        setDay(newDay);
    }

    const handleMonth = (event) => {
        const newMonth = event.target.value;
        setMonth(newMonth);
    }

    const handleBdmsg = (event) => {
        const newBdmsg = event.target.value;
        setBdmsg(newBdmsg)
    }

    const handleWisher = (event) => {
        const newWisher = event.target.value;
        setWisher(newWisher)
    }




    return (
        <Container maxWidth="lg">
        <div style={{padding: "4vw 0 0px"}}>
                
                <div style={{ padding: "3vw 0 0" }}>
                    <PageHeader
                        title="Card Generator"
                    />
                </div>
                
                <div style={{margin: "10vh auto 2vh" }}>
                    
                    <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                            <div>
                                <input type="file" onChange={handlePhoto} name="photo" accept=".jpg, .png, .gif, .jfif, .JPEG,.PNG, .GIF"/>
                            </div>

                            <div>
                                <input type="text" onChange={handleCname}  value={cname} placeholder="Name of Celerant" name="name" autoFocus autoComplete="off" required />
                            </div>

                            <div>
                                <input type="text" onChange={handleChangeNickname} value={nickname} name="nickname" placeholder="Nickname/Title of Celebrant"  autoComplete="off" />
                            </div>
                            <div>
                                 <input type="number" onChange={handleDay} min="1" max="31" value={day} placeholder="Birthday" name="day"  required />
                            </div>
                            <div>
                                
                                        
                                        <select onChange={handleMonth} value={month} required id="month" name="month">
                                        <option selected>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                        </select>
                            </div>

                            <div>
                                 <textarea rows="5" onChange={handleBdmsg} name="bdmsg" value={bdmsg} placeholder="Type your birthday message/wish...                                      *Note:Random message would be generated if left empty* "  autoCorrect ></textarea>
                            </div>

                            <div>
                                 <input type="text"  onChange={handleWisher} name="wisher" value={wisher} placeholder="Enter your name" autoComplete="off" />
                            </div>
                           
                           
                    </Grid>
                    
                    <Grid item lg={8} md={8} sm={6} xs={12}>
                            <div className="glass-bg" style={{margin: "auto 2vw auto 2vw"}}>
                                <h3> Card </h3>

                                <div> <img src={photo} alt="celebrant pics" /> </div>

                                <div>{cname}</div>
                                <div>{nickname}</div>  
                                
                                <div> {day} {
                                    (day === null) ? <div>  </div> :
                                    (day === "1" || day === "21" || day === "31") ? <div> <sup> st  </sup> </div> :
                                    (day === "2" || day === "22") ? <div> <sup> nd  </sup> </div> :
                                    (day === "3" || day === "23") ? <div> <sup> rd  </sup> </div> : <div> <sup> th  </sup> </div>}
                                </div>
                               

                                <div>{month}</div>
                                <div>{bdmsg}</div>
                                <div>{wisher}</div>
                        </div>
                    </Grid>
                        
                    </Grid>
                </div>          
                
                 <Grid container style={{display: "flex", justifyContent: "space-around", marginBottom: "20vh"}}>
                    <PageButton
                    name="Build"
                    icon={<AddPhotoAlternateIcon />}
                    click={pushData}
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

export default BirthdayCardCreator
