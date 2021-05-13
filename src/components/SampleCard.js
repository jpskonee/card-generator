import React from 'react'

const SampleCard = (props) => {
    return (
        <div>
              <div style={{ flexWrap: "wrap", margin:"15px auto 80px" }}>
                  <span style={{ marginRight:"8px"}}>
                    <img className="sample-img" src={props.img1} alt="sample pix" height="300px" width="300px" />
                  </span>
                  <span style={{ marginRight:"8px"}}>
                    <img className="sample-img" src={props.img2} alt="sample pix" height="300px" width="300px" />
                  </span>
                  <span style={{ marginRight:"8px"}}>
                    <img className="sample-img" src={props.img3} alt="sample pix" height="300px" width="300px" />
                  </span>
              </div>
        </div>
    )
}

export default SampleCard
