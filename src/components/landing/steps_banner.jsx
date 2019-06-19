import React, { Component } from 'react';


class StepsBanner extends Component {


  renderList = () => { 


    
    console.log('render list started');
    const steps = [
    { stepImage: "computer", stepText: "1. Describe your issue" },
    { stepImage: "calendar", stepText: "2. Specify budget & time frame" },
    { stepImage: "star", stepText: "3. Get the work, rate it!" }

    ];

    return steps.map(({stepImage,stepText}) => {

        const srcImage = `./src/images/icons/${stepImage}.png`;
        const id = `${stepImage}`
      return (
          <div key={stepImage} className="step-circle" id = {id}>
                  <img src= {srcImage} className = 'step-icon'/>
                <p> {stepText }</p>
          </div>
        ); 
    });
};

render() {
    // console.log(`heads is ${this.props.heads}`);
  // const loggedIn = this.props.loggedIn;
  return (
  <div className="step-circles-container">
      {this.renderList()}
  </div>

    );
}
}

export default StepsBanner;



                // <img src= {srcFace} className = 'face-avatar'/>
                // <div className = "language-box-lower">
                //   <div>{personName}</div>


                // </div>


