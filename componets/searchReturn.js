import React, { useEffect, useState } from 'react'
import UseFetchGif from './hooks/useFetchGif';



export const SearchReturn = () => {
const [state, setstate] = useState(0)
// const loading=UseFetchGif();}

useEffect(() => {
    const timer = setTimeout(() => console.log("Hello, World!"), 3000);
    return () => clearTimeout(timer);
  }, []);


// useEffect(
//     ()=>{
//         const a=setTimeout(()=>setstate(state +1),1000);
//         return ()=>clearTimeout(a)
//     }
// )
// console.log(demo())
    return (
        <div>
            {state}
        </div>
    )
}
