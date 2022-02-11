
import { CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
import React, { useEffect } from 'react';
import ImageContainer from '../imagecontainer';

import unsplash from '../unsplash';

export default function Gallery(){


    const [Image,setImage] = React.useState([])


    useEffect(()=>{

    unsplash.photos.list({}).then(res=>{
       
        setImage(res.response.results)
    }).catch(er=>{
        console.log(er)
    })

    },[])

  
    return(
        <>
        <Container sx={{mt:2,mb:2}}>

            <Typography sx={{mt:1,mb:2,textAlign:"center",fontWeight:"600",fontSize:"30px"}}>
                Image Grid
            </Typography>

        <Grid container spacing={1}>

{Image.map((item,index)=>{

    return(

        <Grid item  key={index} lg={4} xl={4} md={12} xs={12} sm={12}>

            {/* <CardMedia

            component={'img'}

            image={item.urls.full}

            height={300}

            /> */}

            <ImageContainer

            height={300}

            width={300}

            src={item.urls.full}
            

            />

        </Grid>
        
    )
})

}





</Grid>

        </Container>
     
        </>
    )
}