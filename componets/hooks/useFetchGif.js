import React, { useState } from 'react'

const UseFetchGif = () => {

const [state, setState] = useState({
    data:[],
    loading:true
})


const de=()=>{
    setTimeout(()=>setState(
    { data:[1,2,3,4,5],
        loading:false
    }
) ,2000)
}



return state
}

export default UseFetchGif
