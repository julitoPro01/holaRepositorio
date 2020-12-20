import React from 'react'

export const Busqueda = ({valueGif}) => {


    return (
        <>
            {
                valueGif.map(img=>{

                
                  return(
                      <image>
                      
                      <img src={img.img} key={img.id}  alt={img.title}>
                                    <p> sdfsdfsf</p>
                      </img>
             
                       </image>
                  ) 
                 }   
               )
                  
            }
           
        </>
    )
}
