import React from 'react'
import CardHome from "../CardHome"

const QuoteHome = () => {
  return (
    <div>
      <CardHome
        title="Quote Card"
        img1="https://visitquotes.com/wp-content/uploads/Famous-Quotes-About-Learning-From-Others-Tumblr.jpg"
        img2="https://dogtrainingobedienceschool.com/pic/3867850_full-end-of-year-quotes-for-business-motivational-quotes-for-a-successful-year-stencil.jpg"
        img3="https://blog.hubspot.com/hs-fs/hubfs/2-min.png?width=598&name=2-min.png"
         createClick={() => {
          alert("clicked on create in Quote home")
        }}
        viewClick={() => {
          alert("Clicked on view in Quote home")
        }}
       />
    </div>
  )
}

export default QuoteHome
