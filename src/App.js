import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './components/Hero';
import Highlights from './components/Highlights'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer';
import CookieConsent from "react-cookie-consent";
import './css/layout.css'

export default class App extends React.Component{
 render(){
   return(
     <div>
      <Newsletter/>
      <CookieConsent
        location="top"
        buttonText="Got it"
        style={{ backgroundColor: '#F2F2F2', color:'black'}}
        buttonStyle={{borderRadius:"5px", paddingLeft:"15px", paddingRight:"15px", backgroundColor: "#007bc1", color:'white',fontSize: "18px;" }}
        expires={150}>
        <center><div style={{ maxWidth: "720px" }}>By accessing and using this website, you acknowledge that you have read and
          understand our {" "}
          <span style={{ color: "#4A55EB" }}>
          Cookie Policy, Privacy Policy, </span>{" "}
          and our {" "}
          <span style={{ color: "#4A55EB" }}>Terms of Service.</span>
          </div>
        </center>
    </CookieConsent>
       <Hero/>
       <Highlights/>
       <Footer/>
     </div>
   )
 }
}