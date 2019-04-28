import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './components/Hero';
import Highlights from './components/Highlights'
import Footer from './components/Footer';
import CookieConsent from "react-cookie-consent";
import ScrollPercentage from 'react-scroll-percentage';
import styled from 'styled-components';
import './css/layout.css'

const Container = styled.div`
    background-color: rgba(0,123,193,0.9);
    color :white;
    padding:16px;
    max-width:620px;
    position:fixed;
    bottom:${props =>props.bottom}px;
    left:${props =>props.left}px;
    z-index:999
    transition: top 0.5s ease;
`;

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        bottom: -300,
        left: -100
    }
    this.timeout =null;
}    
componentDidMount() {
   this.showNewsletter();
    }
  
onShow = () =>{
  if(this.timeout){
      clearTimeout(this.timeout);
      this.setState({bottom:-300}, ()=>{
          this.timeout = setTimeout(()=>{
              this.showNewsletter();},500);
          });
      }else{
          this.showNewsletter();
      }}

  showNewsletter = () => {
      this.setState({
          bottom:16,
      },() =>{
          this.timeout = setTimeout(() =>{
              this.setState({
                  bottom:-300,
              });
          },1000000);
      });
  }    

  handleScroll = (event) => {
    var heightBound = window.height * 0.5
    if (heightBound > window.scrollY) {
        this.showNewsletter()
    } 
    }

 render(){
   return(
     <div>
        <ScrollPercentage
          onChange={(percentage, inView) => console.log(percentage, inView)}
        >
      <Container bottom={this.state.bottom}>
            
            <h3>Get latest updates in web technologies</h3>
            <p>I write articles related to web technologies, such as design trends, development
            tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
            them all.</p>
            <form>
              <div className="col-lg-12">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <input type="text" name="name" placeholder="Email address" className="form-control" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <input type="button" value="Count me in" className="btn btn-block sub"/>
            </div>
            </div>
            </form>
      </Container>
      <CookieConsent
        location="top"
        buttonText="Got it"
        style={{ backgroundColor: '#F2F2F2', color:'black'}}
        buttonStyle={{ alignContent:"left",borderRadius:"5px", paddingLeft:"15px", paddingRight:"15px", backgroundColor: "#007bc1", color:'white',fontSize: "18px;" }}
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
      </ScrollPercentage>
     </div>
   )
 }
}