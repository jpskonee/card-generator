import React from 'react'
import CardHome from "../CardHome"

const TweetHome = () => {
  return (
    <div>
      <CardHome
        title="Tweet Card"
        img1="https://www.newidea.com.au/media/88949/tweet.jpg?width=720&center=0.0,0.0"
        img2="https://ichef.bbci.co.uk/news/976/cpsprodpb/4F18/production/_114084202_screenshot2020-08-24at09.11.01.png"
        img3="https://i.hurimg.com/i/hdn/75/0x0/59c72f5145d2a027e83a744c"
         createClick={() => {
          alert("clicked on create in Poster home")
        }}
        viewClick={() => {
          alert("Clicked on view in Poster home")
        }}
       />
    </div>
  )
}

export default TweetHome