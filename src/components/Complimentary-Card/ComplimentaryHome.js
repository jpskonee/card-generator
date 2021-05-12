import React from 'react'
import CardHome from "../CardHome"


const ComplimentaryHome = () => {
  return (
    
    <div>
      <CardHome
        title="Buisness Card"
        img1="https://d1lg02y8acjwad.cloudfront.net/media/catalog/product/cache/3bad2bb84f147adafcb658fb1cc96a22/b/u/business-card-printing.jpg"
        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhFkSV_y-2bzIX4SqGjSjug8_n2-TQNyRwqL5sVUzzIoM2vQP6RGdV9mq8vKqCjjP68c&usqp=CAU"
        img3="https://d12uoqa0c8grue.cloudfront.net/5639397_386645b1-4ba8-4aa8-b8bc-32f935df3004_1080x810.jpg"
        createClick={() => {
          alert("clicked on create in Complimentary")
        }}
        viewClick={() => {
          alert("Clicked on view in Complimentary")
        }}
      />
    </div>
  )
}

export default ComplimentaryHome
