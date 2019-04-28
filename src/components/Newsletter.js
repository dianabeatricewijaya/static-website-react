import React, { Component } from 'react';
import styled from 'styled-components';

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

class Newsletter extends Component {
    constructor(props){
        super(props);
        this.state={
            bottom: -300,
            left: -100
        }
        this.timeout =null;
    }    


componentDidMount() {
    // test
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
        },3000);
    });
}    

    handleScroll(event) {
    var heightBound = window.height * 0.5
    if (heightBound > window.scrollY) {
        this.showNewsletter()
    } 
    }
    
    render() {    
        return(
            <React.Fragment onScroll={this.handleScroll}>
                
            <Container bottom={this.state.bottom}>
            <h3>Get latest updates in web technologies</h3>
            <p>I write articles related to web technologies, such as design trends, development
tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
them all.</p>
            <form>
                <label>
                    <input type="text" name="name" placeholder="Email address" />
                </label>
                <input type="submit" value="Count me in" />
            </form>
                            </Container>
                            
            </React.Fragment>
        );
    }
  }
  
  export default Newsletter;