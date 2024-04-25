import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';

const PlaceDetails = ({place, selected, refProp}) => {
  const classes = useStyles();

// here shouldve been the scroll function
  // I HAVE LITERALLY NO IDEA WHY THIS IS NOT WORKING MAYBE SOMETHING ABOUT MY BROWSER? maybe abot refProp lol maybe in list
  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  if (selected) console.log({selected, refProp});




  return (
    <Card elevation={6}>
      <CardMedia 
        style={{height:350}}
        image={place.photo ? place.photo.images.large.url : 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg' }
        title ={place.name} />

        <CardContent>
          <Typography gutterBottom variant='h5'> {place.name}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant='subtitle1'>
              Price
            </Typography>
            <Typography gutterBottom variant='subtitle1'>
              {place.price_level}
            </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
            <Rating  value={Number(place.rating)} readOnly />

            <Typography gutterBottom variant='subtitle1'>
              out of {place.num_reviews} reviews
            </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between"> 
            <Typography variant='subtitle1'>
              Ranking
            </Typography>
            <Typography gutterBottom variant='subtitle1'>
              {place.ranking}
            </Typography>
            </Box>
            {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt='award' />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
                {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
          {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
          {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Travel Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>  
    </Card>
    


  )
}

export default PlaceDetails
