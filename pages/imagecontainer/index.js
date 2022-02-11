import { CardMedia } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

import UseIntersectionObserver from "../intersectionobserver"


const ImageContainer=(props)=>{

   const ref = React.useRef()

   const [Visible,setVisible] = React.useState(false)



   UseIntersectionObserver({
    target: ref,
    onInterSect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setVisible(true)
        observerElement.unobserve(ref.current);
      }
    }
       
   })


    const aspectratio = (props.height/props.width)*100



    return(
        <Box ref={ref} sx={{paddingBottom:Visible?'0px':`${aspectratio}%`}} className="imagecontainer">

            {Visible?


            <CardMedia

            component={'img'}

            image={props.src}

            className=' full'

            height={props.height}

            width={props.width}



            />:
            ""

            }


        </Box>
    )

}



export default ImageContainer