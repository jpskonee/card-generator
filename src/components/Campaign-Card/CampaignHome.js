import React from 'react'
import CardHome from "../CardHome"

const CampaignHome = () => {
  return (
    <div>
      <CardHome
        title="Campain Card"
        img1="https://pbs.twimg.com/media/Cx5A-iDWEAAQ9ax.jpg"
        img2="https://ichef.bbci.co.uk/news/1024/branded_news/13FA6/production/_114003818_blmleadpic796.jpg"
        img3="https://i.pinimg.com/originals/48/ee/7a/48ee7a2d7dae89dadd24f09022e1c1ba.jpg"
         createClick={() => {
          alert("clicked on create in Campaign")
        }}
        viewClick={() => {
          alert("Clicked on view in Campaign")
        }}
       />
    </div>
  )
}

export default CampaignHome
