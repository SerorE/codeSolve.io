import React, { Component } from 'react';


class Steps extends Component {


  renderList = () => { 


    
    console.log('render list started');
    const steps = [
    { stepImage: "computer", stepText: "1. Describe your issue, share your code" },
    { stepImage: "calendar", stepText: "2. Agree on price & deadline" },
    { stepImage: "star", stepText: "3. Get the work and rate it!" }

    ];

    return steps.map(({stepImage,stepText}) => {

        const srcImage = `https://codesolve-4122b.firebaseapp.com/images/icons/${stepImage}.png`;

        const id = `${stepImage}`
      return (
          <div key={stepImage} className="step" id = {id}>
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

 <div className="banner step-banner">
    <h2>How it works</h2>

      <div className="steps-container">
          {this.renderList()}
      </div>
</div>


    );
}
}

export default Steps;



                // <img src= {srcFace} className = 'face-avatar'/>
                // <div className = "language-box-lower">
                //   <div>{personName}</div>


                // </div>


