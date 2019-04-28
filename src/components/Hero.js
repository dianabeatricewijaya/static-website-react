import React, { Component } from 'react';
import Logo from '../logo.png';
import '../css/layout.css'
class Hero extends Component {
        
    render() {    
      const name= "Diana Beatrice";
      const description= "Have something great in mind? Feel free to contact me.";
      const description2= "I'll help you to make it happen.";
  
        return(
            <header id="home">
            <a href="/"><img className="logo" src={Logo} alt="Logo" /></a>
            <div className="row banner">
               <div className="banner-text">
                  <h2 className="responsive-headline">Hello! I'm {name}.</h2>
                  <h3 className="responsive-headline">Consult, Design, and Develop Websites</h3>
                  <h4>{description}<br/>{description2}<br/></h4>
                  <hr />
                  <div >
                  <div className="hero__btn">
                  <button className="but">LET'S MAKE CONTACT</button>
                </div>
                </div>
               </div>
            </div>
         </header>
          );
        }
      }
      
      export default Hero;