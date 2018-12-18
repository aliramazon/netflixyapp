import React from 'react';

const MovieDetails = (props) => {
    console.log(props);
    
    return (
        <div>MovieDetails: {props.match.params.id}</div>
    );
};


export default MovieDetails;
