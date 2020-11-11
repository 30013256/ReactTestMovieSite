import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import NoImage from './NoImage.png';

export default class MovieItem extends React.Component {
    render() {
        const { title, backdrop_path, release_date, id} = this.props.movie;        
        return (
            <React.Fragment>   
                <a style={cardStyle} target="_blank" rel="noopener noreferrer" className="ml-lg-3 mr-lg-3 btn p-0 bg-light" href={"https://www.themoviedb.org/movie/" + id}>              
                    <object className="card-img-top" style={{width: '100%' }} data={"https://image.tmdb.org/t/p/w220_and_h330_face" + backdrop_path} type="image/png">
                        <img className="card-img-top" alt="Movie Cover" src={NoImage} style={{width: '100%' }}/>
                    </object>                   
                    <Card.Body className="p-0">                      
                        <Row className="font-weight-bold text-left m-3">
                            { title }
                        </Row>
                        <Row className="m-3">
                            <small className="text-muted">{ release_date }</small>
                        </Row>                                                                                         
                    </Card.Body>
                </a>
            </React.Fragment>
        )
    }
}

const cardStyle = {
    border: '0',
    width: '200px', 
    minWidth: '200px',
    maxWidth: '200px',
   
    marginBottom: '3rem',
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
}