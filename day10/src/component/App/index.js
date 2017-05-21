import React, {Component} from 'react';
import  Footer from '../Footer';
import Header from '../Header';
import Form from "../Form";
import Listing from  "../Listing";

import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {
    constructor() {
        super();
    }

    /* changeHandler = e => {
     this.setState({
     textInput :e.target.value
     });
     }*/

    render() {
        return (
            <div>
               <Container>
                   <Row>
                       <Col>
                           <br/>
                           <br/>
                       </Col>
                   </Row>

                    <Row>
                        <Col md="2"/>
                        <Col md="10">
                            <Header/>
                        </Col>
                    </Row>

                   <Row>
                       <Col>
                           <br/>
                           <br/>
                       </Col>
                   </Row>

                   <Row>
                        <Col md="2"/>
                        <Col md="10">
                            <Form/>
                        </Col>
                    </Row>

                   <Row>
                       <Col>
                           <br/>
                           <br/>
                       </Col>
                   </Row>

                    <Row>
                        <Col md="2"/>
                        <Col md="10">
                            <Listing/>
                        </Col>
                    </Row>

                   <Row>
                       <Col>
                           <br/>
                           <br/>
                       </Col>
                   </Row>
                    <Row>
                        <Col md="2"/>
                        <Col md="10">
                            <Footer/>
                        </Col>
                    </Row>
               </Container>
            </div>

        )
    }
}
