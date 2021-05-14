import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import PageHeader from '../PageHeader';
import Footer from '../Footer';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { app } from "../../base";

const birthdayDB = app.firestore().collection("birthdayDB")


const BirthdayCardCreator = () => {

    const [cname, setCname] = useState("");
    const [doneUpload, setDoneUpload] = useState(false);

    const [nickname, setNickname] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [bdmsg, setBdmsg] = useState("");
    const [wisher, setWisher] = useState("");
    const [photo, setPhoto] = useState(null);
    
    //getting the image url
    const handlePhoto = async (e) => {
        const file = e.target.files[0]
        if (file.size > 3200000) {
            alert("Image is too big! Choose another!");
        } else {
            const storageRef = app.storage().ref()
            const fileRef = storageRef.child(file.name)
            await fileRef.put(file)
            setPhoto(await fileRef.getDownloadURL())
            setTimeout(() => {
            setDoneUpload(true) 
            }, 2000 )
            };
    }

    //pushing the img to the storage
    const pushData = async () => {
        if (day > 31 || day < 1) {
            alert("Please enter a valid Day")
        } else {
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
            setTimeout(() => {
                setBdmsg("")
                setDay("")
                setNickname("")
                setMonth("")
                setPhoto(null)
                setWisher("")
                setCname("")
            }, 2000);
        }
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
        if (newDay > 31 || newDay < 0) {
            alert("Please enter a valid Day")
        } else {
            setDay(`${newDay}`);
        }
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

                       
            
                <form>
                
                <div style={{margin: "10vh auto 2vh" }}>
                    
                    <Grid container spacing={2}>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                     
      
                            <div>
                                <input type="file" onChange={handlePhoto} name="photo" accept=".jpg, .png, .gif, .jfif, .JPEG,.PNG, .GIF"/>
                            </div>

                            <div>
                                <input type="text"  onChange={handleCname}  value={cname} placeholder="Name of Celerant" name="name" autoFocus autoComplete="off" required />
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
                                 <textarea rows="5" maxlength="150" onChange={handleBdmsg} name="bdmsg" value={bdmsg} placeholder="Type your birthday message/wish...                                      *Note:Random message would be generated if left empty* "  autoCorrect ></textarea>
                            </div>

                            <div>
                                 <input type="text"  onChange={handleWisher} name="wisher" value={wisher} placeholder="Enter your name" autoComplete="off" />
                            </div>
                       
                           
                    </Grid>
                    
                    <Grid item lg={8} md={8} sm={6} xs={12}>
                            <div className="glass-bg" style={{margin: "8px 2vw auto 2vw", position: "relative", padding: "20px auto"}}>
                                    <div style={{marginTop: "3.5vh"
                                    }}> <span style={{
                                        background: "black",
                                        color: "aqua",
                                        fontSize: "16px",
                                        fontFamily: "Press Start 2P",
                                        fontWeight: "bold",
                                        padding: "10px 20px",
                                        borderRadius: "20px 0"
                                    }}> Preview</span>  </div>

                                    <div style={{
                                        margin: "4.5vh auto 5.5vh",
                                        width: "47vh",
                                        height: "47vh",
                                        border: "2px teal groove",
                                        backgroundColor: "white",
                                        backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-brick-wall.png')",
                                    }}>
                                        <div> <img src={photo} alt="celebrant pics" height="300vh" width="250vh" /> </div>

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
                                
                        </div>
                    </Grid>
                        
                    </Grid>
                </div>          
                
                 {doneUpload && <button className="btn" onClick={pushData} style={{margin: "10vh auto 20vh"}}> Build <AddPhotoAlternateIcon /> </button>}

             </form>
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
