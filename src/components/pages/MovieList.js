import React, { Component } from 'react';
import Movies from '../Movies';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import $ from 'jquery';
import MovieNav from '../MovieNav';

export class MovieList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movies: [],
            searchTerm: '',
            activeKey: 1,
        }

        this.handleSelect = this.handleSelect.bind(this)
         
    }
   
    //#region 
    async componentDidMount() {
        const { data: movies } = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=f3c2849da7f82f50ca1cd896a0065662&language=en-US&page=1`
        );
        this.setState({ movies: movies.results });  
    }

    changeCatorgory = (catorgory) => {

        const urlString = `https://api.themoviedb.org/3/movie/${catorgory}?api_key=f3c2849da7f82f50ca1cd896a0065662&language=en-US&page=1`
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                const results = searchResults.results
        
                this.setState({movies: results})
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        }) 
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.searchTerm.trim() !== '') 
        {
            this.handleSelect(0)
            const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + this.state.searchTerm
            $.ajax({
                url: urlString,
                success: (searchResults) => {
                    const results = searchResults.results
            
                    this.setState({movies: results})
                },
                error: (xhr, status, err) => {
                    console.error("Failed to fetch data")
                }
            })   
        }
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value});
        console.log(this.state.searchTerm)
    }

    handleSelect = (eventKey) => {
        this.setState({activeKey: eventKey});
    }
    //#endregion

    render() {
        return (
            <React.Fragment> 
                <MovieNav 
                    activeKey={this.state.activeKey}
                    handleSelect={this.handleSelect}
                    handleChange={this.handleChange}
                    changeCatorgory={this.changeCatorgory}
                    onSubmit={this.onSubmit}
                />               
                {/* <Navbar className="mt-5 mb-2" collapseOnSelect expand="lg" bg="transparent" variant="light"> 
                    <Container>          
                        <Navbar.Brand>Catorgory</Navbar.Brand>                   
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav variant="pills" activeKey={this.state.activeKey}>
                                <Nav.Link eventKey={1} onSelect={this.handleSelect} onClick={() => {this.changeCatorgory('popular')}}>Popular</Nav.Link>
                                <Nav.Link eventKey={2} onSelect={this.handleSelect} onClick={() => {this.changeCatorgory('top_rated')}}>Top Rated</Nav.Link>
                                <Nav.Link eventKey={3} onSelect={this.handleSelect} onClick={() => {this.changeCatorgory('upcoming')}}>Up Coming</Nav.Link>
                                <Nav.Link eventKey={4} onSelect={this.handleSelect} onClick={() => {this.changeCatorgory('now_playing')}}>Now Playing</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <form className="form-inline" onSubmit={this.onSubmit}>
                                    <div className="form-group mb-2 mr-2">
                                        <input type="text" className="form-control ml-0" placeholder="Search.." onChange={this.handleChange.bind(this)}/>
                                    </div>                       
                                    <input type="submit" value="Search" href="#search" className="btn btn-primary mb-2"/>           
                                </form>
                            </Nav>    
                        </Navbar.Collapse>                                                     
                    </Container>     
                </Navbar>       */}
                <Container style={{}} className="d-flex flex-wrap justify-content-between p-sm-0">
                    <Movies 
                        movies={this.state.movies} 
                        getBackDropPath={this.getBackDropPath}
                    />                       
                </Container>              
            </React.Fragment>
        )
    }
}

export default MovieList;
