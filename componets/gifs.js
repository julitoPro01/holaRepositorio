import React, { useEffect, useState } from 'react'
// import { Busqueda } from './busqueda';

const Gifs = ({value}) => {

useEffect(
    ()=>getGift(),[]
)

    const [valueGif, setvalueGif] = useState([]);
    const getGift=async()=>{
        const url=`http://api.giphy.com/v1/gifs/search?api_key=m5WwFfWtl4Q6aqj7VYpWXHMmHMCT3tKV&q=${encodeURI(value)}&limit=10`;
        const respon=await fetch(url);
        const {data}=await respon.json();

        const datas=data.map(img=>(
            {
                id:img.id,
                url:img.images.downsized_medium.url,
                title:img.title
            }
        ))

        setvalueGif(datas)

        console.log(datas)
    }

    return (
        <div className='imges'>
        {
            valueGif.map(img=>{
                
                return(
                 
                    <img 
                src={img.url} key={img.id}
                alt={img.title}
                />
              
                )
            })
        }
      
        </div>
    )
}

export default Gifs
