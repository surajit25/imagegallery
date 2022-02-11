import { Box, CardMedia, Container } from "@mui/material";
import React, { useState } from "react";
import Carsouel, { CarsouelItem } from "../carsouel";
import ImageContainer from "../imagecontainer";

import unsplash from "../unsplash";

export default function Banner(){

    const [Image,setImage] = useState([])

    React.useEffect(()=>{

        unsplash.photos.list({}).then(res=>{

            setImage(res.response.results)
        }).catch(er=>{
            console.log(er)
        })

    },[])

    return(
        <Box >
      

              <Carsouel>

         
            {Image.map((item,index)=>{
                return(
                    <CarsouelItem key={index}>

                  
                        <CardMedia
                        component={'img'}
                        image={item.urls.full}
                        
                        sx={{height:{lg:"500px",md:"300px",sm:"300px",xs:"300px",xl:"500px"}}}
                        width={'100%'}
                        />
                        
                    </CarsouelItem>
                )
            })}


        </Carsouel>

      
      
        </Box>
    )
}