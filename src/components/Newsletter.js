import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: rgba(0,123,193,0.9);
    color :white;
    padding:30px;
    max-width:620px;
    position:fixed;
    bottom:${props =>props.bottom}px;
    z-index:999
    transition: bottom 0.5s ease;
`;

export default class Newsletter extends Component {
    constructor(props){
        super(props);
        this.state={
            bottom: -300
        }
    }    
    componentDidMount() {
       window.addEventListener('scroll', this.listenToScroll)
        }
      
        componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
       }
    
        listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
    
        if (winScroll > winScroll/2){
          this.showNewsletter();
         }
        
      }
    
      onhide = () => {
          this.setState({
              bottom:-300,
          });
      }    
    
    
      showNewsletter = () => {
          this.setState({
              bottom:0,
          });
      }    
    
    
    render() {    
        return(
            <Container bottom={this.state.bottom}>
            <button onClick={(e) => this.onhide(e)} type="button" data-dismiss="alert" class="close close-but" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            <h3>Get latest updates in web technologies</h3>
            <p>I write articles related to web technologies, such as design trends, development
            tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
            them all.</p>
            <form>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <input type="email" name="name" placeholder="Email address" className="form-control" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <input type="button" value="Count me in" className="btn btn-block sub"/>
            </div>
            </form>
         </Container>
        );
    }
  }