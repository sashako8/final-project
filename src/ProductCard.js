import React from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles, Link, Grid } from '@material-ui/core';
import Products from './pacelabace.json';

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gridTemplateRows: 'auto auto',
        gridGap: "100px",
    },
    root: {
      maxWidth: 250,
      maxHeight: 300,
      boxShadow: '5px 5px 7px 7px gray',
      '&:hover': {
        transition: 'transform .2s',
        transform: 'scale(1.2)',
     }
    },
    media: {
      height: 140,
    },
  });

export default function ProductCard(product) {
    
    const classes = useStyles();

    return(
        <Grid className={classes.container}>  
            {Products.map((product) => (                
                <Card className={classes.root}>
                    <Link href="www.google.com">
                    <CardMedia
                        className={classes.media}
                        image={product.image}
                        title="Image Card"
                    />
                    <CardContent>
                        {product.name}
                            <Typography>
                                {product.description}
                            </Typography>
                    </CardContent>
                    </Link>
                </Card>
            ))}
        </Grid>
    )   
}