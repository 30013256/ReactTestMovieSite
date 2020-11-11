import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default class MovieNav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { activeKey } = this.props.activeKey;
        return (
            <Navbar className="mt-5 mb-2" collapseOnSelect expand="lg" bg="transparent" variant="light"> 
                <Container>          
                    <Navbar.Brand>Catorgory</Navbar.Brand>                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="pills" activeKey={activeKey} defaultActiveKey={1}>
                            <Nav.Link eventKey={1} onSelect={this.props.handleSelect} onClick={() => {this.props.changeCatorgory('popular')}}>Popular</Nav.Link>
                            <Nav.Link eventKey={2} onSelect={this.props.handleSelect} onClick={() => {this.props.changeCatorgory('top_rated')}}>Top Rated</Nav.Link>
                            <Nav.Link eventKey={3} onSelect={this.props.handleSelect} onClick={() => {this.props.changeCatorgory('upcoming')}}>Up Coming</Nav.Link>
                            <Nav.Link eventKey={4} onSelect={this.props.handleSelect} onClick={() => {this.props.changeCatorgory('now_playing')}}>Now Playing</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <form className="form-inline" onSubmit={this.props.onSubmit}>
                                <div className="form-group mb-2 mr-2">
                                    <input type="text" className="form-control ml-0" placeholder="Search.." onChange={this.props.handleChange.bind(this)}/>
                                </div>                       
                                <input type="submit" value="Search" href="#search" className="btn btn-primary mb-2"/>           
                            </form>
                        </Nav>    
                    </Navbar.Collapse>                                                     
                </Container>     
            </Navbar>
        )
    }
}
