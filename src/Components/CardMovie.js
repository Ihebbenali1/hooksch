import * as React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from 'react-bootstrap/Card';
const CardMovie=({el})=>{
    return(
        <div >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.posterURL} style={{width:"286px",height:"406px"}}/>
                <Card.Body>
                <Card.Title><Link to={`/trailer/${el.id}`} >{el.title} </Link></Card.Title>
                <Card.Text>
                {el.description}
        </Card.Text>
        <Card.Text> <h3>Trailer : </h3>
            
        </Card.Text>
        <Typography component="legend"></Typography>
      <Rating name="read-only" value={el.rating} readOnly />
      </Card.Body>
    </Card> 

            
        </div>
    )
}


export default CardMovie