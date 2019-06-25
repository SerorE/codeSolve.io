import React, { Component } from 'react';



class HeadsBanner extends Component {


  renderList = () => { 


    
    console.log('render list started');
    const heads = [
    { personImage: "", languageImage: "swift", personName: "Simon N.G.", specialty: "Swift & Obj-c Expert" },
    { personImage: "", languageImage: "php", personName: "Khloe L.", specialty: "Wordpress & Design" },
    { personImage: "", languageImage: "html5", personName: "Marina N.", specialty: "HTML5 Developer" },
    { personImage: "", languageImage: "javascript", personName: "Maurice J.", specialty: "Sr. Javascript Developer" },
    { personImage: "", languageImage: "objc", personName: "Rajesh S.", specialty: "AWS Database Engineer" },
    { personImage: "", languageImage: "python", personName: "Andrew P.", specialty: "Python Developer" },
    { personImage: "", languageImage: "wordpress", personName: "Peter M.", specialty: "PHP Developer" }

    ];

    console.log(`heads is ${heads}`);

    return heads.map(({personImage,languageImage, personName, specialty }) => {

        const srcLanguage = `https://codesolve-4122b.firebaseapp.com/images/icons/${languageImage}.png`;
        const srcFace = `https://codesolve-4122b.firebaseapp.com/images/faces/${languageImage}.png`;


      return (

          <div key={languageImage} className="solver-box">

                <img src= {srcFace} className = 'face-avatar'/>
                <div className = "language-box-lower">
                  <div className = "person-name">{personName}</div>
                  <div className = "specialty">{specialty}</div>
                </div>
          </div>
        ); 
    });



};

render() {

    // console.log(`heads is ${this.props.heads}`);

  // const loggedIn = this.props.loggedIn;
  return (



      <div className="banner solver-banner">
        <h2>Our top solvers in June</h2>
      <div className="solver-boxes-container">

          {this.renderList()}
      </div>

    </div>


    );
}
}

export default HeadsBanner;



                  // <img src= {srcLanguage} className = 'language-icon'/>


