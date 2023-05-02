import * as React from 'react';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from 'react-bootstrap/Card';
const CardMovie=({el})=>{
    return(
        <div >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.posterURL} style={{width:"286px",height:"406px"}}/>
                <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                {el.description}
        </Card.Text>
        <Typography component="legend"></Typography>
      <Rating name="read-only" value={el.rating} readOnly />
      </Card.Body>
    </Card> 

            
        </div>
    )
}


export default CardMovie