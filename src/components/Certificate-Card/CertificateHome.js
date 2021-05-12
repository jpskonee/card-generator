import React from 'react'
import CardHome from "../CardHome"

const CertificateHome = () => {
  return (
    <div>
       <CardHome 
        title="Certificate Card"
        img1="https://blockgeeks.com/wp-content/uploads/2019/04/Certificate-2.jpg"
        img2="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-template-design-f48b0316aa0ef3f52b497fd2bc38e507_screen.jpg?ts=1578761325"
        img3="https://i.hurimg.com/i/hdn/75/0x0/59c72f5145d2a027e83a744c"
         createClick={() => {
          alert("clicked on create in Certificate")
        }}
        viewClick={() => {
          alert("Clicked on view in Certificate")
        }}
       />
    </div>
  )
}

export default CertificateHome
