import React from 'react';
import brush from '../images/paint-brush.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Item = ({ title, desc, img }) => {
    return (
        <Col xs={12} md={6} lg={4} sm={6}>
         <div className="box">       
             <div>
             <div className="col-md-6 left" > <h3 className="item__title">{title}</h3></div>
             <div className="col-md-6 right"> <img className="item__img" src={img} alt="" /></div>
            </div>
            <div className="col-md-12" >
            <p className="item__desc">{desc}</p>
            </div>
        </div>   
        </Col>
        
    );
  };

export default class Highlights extends React.Component {
    state = {
        data: [
          {
            img: brush,
            title: 'Consult',
            desc:
              'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
          },
          {
            img: brush,
            title: 'Design',
            desc:
              'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
          },
          {
            img: brush,
            title: 'Develop',
            desc:
              'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
          },
          {
            img: brush,
            title: 'Marketing',
            desc:
              'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.'
          },
          {
            img: brush,
            title: 'Manage',
            desc:
              'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
          },
          {
            img: brush,
            title: 'Evolve',
            desc:
              'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.'
          },
        ]
      };
      render(){

    return (
        <div>
            <section className="features">
            <div className="features__headline">
                <h1 className="headline1">
                How Can I Help You?
                </h1>
                <h3 className="headline2">
                Our work then targeted, best practices outcomes social innovation synergy.
                Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                program areas scale.
                </h3>
                <Container >
                    <Row>
                        {this.state.data.map(data => {
                    return (
                    <Item className="con"
                        key={data.title}
                        img={data.img}
                        title={data.title}
                        desc={data.desc}
                    />
                    );

                })}
                    </Row>
                </Container>
                
            </div>
        </section>
        </div>
    )
};
}
