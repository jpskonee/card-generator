import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import PageHeader from '../PageHeader';
import Footer from '../Footer';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { app } from "../../base";

const birthdayDB = app.firestore().collection("birthdayDBs");

const BirthdayCardCreator = () => {
    
    const [doneUpload, setDoneUpload] = useState(false);
    const [tDob, setTdob] = useState(false);


    const [cname, setCname] = useState("");
    const [nickname, setNickname] = useState("");
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState("");
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
    const pushData = async (e) => {
        e.preventDefault();
            if (day > 31 || day < 1) {
                    alert("Please enter a valid Day")
            } else {
                await birthdayDB.doc().set({
                name: cname,
                nickname: nickname,
                day: day,
                month: month,
                wisher: wisher,
                avatar: photo,
                createdAt: Date.now().toLocaleString()
                });
                setDay("");
                setNickname("");
                setMonth("");
                setPhoto(null);
                setWisher("");
                setCname("");
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
            setTdob(true)
        }
    }

    const handleMonth = (event) => {
        const newMonth = event.target.value;
        setMonth(newMonth);
    }


    const handleWisher = (event) => {
        const newWisher = event.target.value;
        setWisher(newWisher);
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
                                        <option  value="JAN" selected>January</option>
                                        <option value="FEB">February</option>
                                        <option value="MAR">March</option>
                                        <option value="APRIL">April</option>
                                        <option value="MAY">May</option>
                                        <option value="JUNE">June</option>
                                        <option value="JULY">July</option>
                                        <option value="AUG">August</option>
                                        <option value="SEP">September</option>
                                        <option value="OCT">October</option>
                                        <option value="NOV">November</option>
                                        <option value="DEC">December</option>
                                        </select>
                                </div>
                                
                            <div>
                                 <input type="text"  onChange={handleWisher} name="wisher" value={wisher} placeholder="Enter your name" autoComplete="off" />
                            </div>
                       
                           
                            </Grid>

                            
                    {/* Card preview sesssion start */}
                    <Grid item lg={8} md={8} sm={6} xs={12}>
                            <div className="glass-bg" style={{margin: "8px 2vw auto 2vw", position: "relative", padding: "20px auto"}}>
                                    {/* preview label */}
                                    <div style={{
                                        marginTop: "3.5vh"
                                    }}> <span style={{
                                        background: "black",
                                        color: "aqua",
                                        fontSize: "16px",
                                        fontFamily: "Press Start 2P",
                                        fontWeight: "bold",
                                        padding: "10px 20px",
                                        borderRadius: "5px"
                                    }}> Preview</span>  </div>
                                    {/* preview label ends */}

                                 {/* card starts    */}
                                    <div style={{
                                        position: 'relative',
                                        margin: "4.5vh auto 5.5vh",
                                        width: "47vh",
                                        height: "47vh",
                                        border: "2px teal groove",
                                        backgroundColor: "lightgray",
                                        backgroundImage: "url('https://www.transparenttextures.com/patterns/tex2res4.png')",
                                    }}>
                                    

                                        {/* Date of birth part */}
                                        {tDob && <div style={{
                                            alignContent: 'left',
                                            position: 'absolute',
                                            border: "3px groove silver",
                                            margin: "3px 0 0 3px",
                                            left: "0",
                                            top: "0"
                                        }}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            backgroundColor: "turquoise",
                                            color: "black",
                                        }}>
                                                <div style={{
                                                paddingLeft: "5px",
                                                margin: "auto",
                                                alignContent:"center",
                                                fontWeight: 'bolder',
                                                }}> {day} </div>
                                                
                                            <div style={{fontStyle:"italic", fontFamily: "cursive", fontSize: "8px"}}> {
                                            (day === null) ? <div>  </div> :
                                            (day === "1" || day === "21" || day === "31") ? <div> <sup> st  </sup> </div> :
                                            (day === "2" || day === "22") ? <div> <sup> nd  </sup> </div> :
                                            (day === "3" || day === "23") ? <div> <sup> rd  </sup> </div> : <div> <sup> th  </sup> </div>}
                                                </div>
                                                <div style={{
                                                backgroundColor: "black",
                                                fontSize: "10px",
                                                fontWeight: "bold",
                                                marginLeft: "6px",
                                                paddingLeft: "5px",
                                                padding: "5px",
                                                alignContent: "center",
                                                color: "white",
                                             }}>{month}</div>
                                        </div>
                                        </div>}
                                        {/* date of birth part ends */}

                                        {/* Happy birthday label */}
                                        <div style={{
                                            position: "absolute", right: "0", top: "0",
                                            margin: "4px 4px 0 0", padding: "3px 5px",
                                            backgroundColor: "black", color: "white",
                                            alignContent: "center", fontSize: '15px', textTransform: 'uppercase'
                                        }}>
                                            <div style={{
                                                 
                                             }}>  Happy Birthday</div> 
                                        </div>
                                        {/* Happy birthday label ends */}
                                            
                                   
                                    {/* celebrant image part */}
                                    <div>
                                        <div style={{

                                            margin: '9vh auto 0',
                                            borderRadius: "0 30px",
                                            padding: "5px 5px 2px 5px",
                                            backgroundColor: "white",
                                            border: 'teal solid 5px',
                                            transform: "rotate(5deg)",
                                            display: 'inline-block',
                                        }}> <img src={photo} style={{borderRadius: "0 30px"}} alt="" height="120vh" width="105vh" />
                                            </div>
                                    </div>
                                    {/* celebrant image part */}

                                        {/* name and nickname  part */}
                                        <div  style={{display:'inline-block',margin: "auto"}}>
                                            {(cname.length > 1) && <div style={{
                                                fontFamily: "monospace",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                borderRadius: "5px",
                                                fontSize: "14px",
                                                margin: "5px auto 0",
                                                padding: "2px 20px",
                                                color: "white",
                                                backgroundColor: "teal"
                                            }}>{cname}</div>}

                                            {(nickname.length > 1) && <div style={{
                                                backgroundColor: "white",
                                                display: "inline-block",
                                                padding: "1px 8px 3px",
                                                borderRadius: '5px 0 0',
                                                fontStyle: "italic",
                                                textTransform: "lowercase",
                                                fontSize:"11px"
                                            }}>{nickname}</div>}
                                        </div>
                                        {/* name and nickname ends */}

                                        {/* GIF CAKE BY THE SIDE  */}
                                        <div style={{
                                            position: "absolute", left: "0", bottom: "0",
                                            margin: "0 2px 2px 0",borderRadius: '10px 0 0',
                                            alignContent: "center",
                                            display: "flex", justifyContent: "left"
                                        }}>
                                            <img src="https://thumbs.gfycat.com/CarefulUntriedIrukandjijellyfish-size_restricted.gif" alt="dancing cake" height="50px" width="50px" />
                                        </div>
                                        {/* GIF CAKE BY THE SIDE  */}
                                        
                                     {/* wishers part */}

                                    {(wisher.length > 1) &&    <div  style={{
                                            position: "absolute", right: "0", bottom: "0",
                                            margin: "0 2px 2px 0",borderRadius: '10px 0 0',
                                            alignContent: "center", fontSize: '11px',
                                            display: "flex", justifyContent: "left"
                                        }}>
                                            <div style={{
                                                backgroundColor: "black", color: "white", padding: "3px 5px",
                                                
                                            }}>FROM: </div>
                                            <div style={{
                                                backgroundColor: "white", color: "black", padding: "3px 5px",
                                                fontWeight: 'bold', fontStyle: "italic", fontSize: "12px"
                                            }}>{wisher}</div>
                                       </div>}             
                                     {/* wishers part ends */}
                                    </div>
                                    {/* card preview  ends */}
                        </div>
                    </Grid>
                     {/* Card preview  session end */}   
                        
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
