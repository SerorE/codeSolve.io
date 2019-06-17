import React, { Component } from 'react';



class HeadsBanner extends Component {


  renderList = () => { 


    
    console.log('render list started');
    const heads = [
    { personImage: "", languageImage: "swift", personName: "Simon N.G." },
    { personImage: "", languageImage: "php", personName: "Khloe L." },
    { personImage: "", languageImage: "html5", personName: "Marina N." },
    { personImage: "", languageImage: "javascript", personName: "Maurice J." },
    { personImage: "", languageImage: "python", personName: "Andrew P." },
    { personImage: "", languageImage: "wordpress", personName: "Peter M." }

    ];

    console.log(`heads is ${heads}`);

    return heads.map(({personImage,languageImage, personName }) => {

        const srcLanguage = `./src/images/icons/${languageImage}.png`;
        const srcFace = `./src/images/faces/${languageImage}.png`;


      return (

          <div className="language-box">

                <img src= {srcFace} className = 'face-avatar'/>
                <div className = "language-box-lower">
                  <div>{personName}</div>

                  <img src= {srcLanguage} className = 'language-icon'/>

                </div>
          </div>
        ); 
    });



};

render() {

    // console.log(`heads is ${this.props.heads}`);

  // const loggedIn = this.props.loggedIn;
  return (


  <div className="language-boxes-container">
      {this.renderList()}
  </div>

    );
}
}

export default HeadsBanner;





