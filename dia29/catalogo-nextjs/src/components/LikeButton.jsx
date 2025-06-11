"use client"

import {Button} from './ui/Button'
import {useState} from 'react'

const LikeButton = ( )=>{
    const [count,setCount]= useState(0);
    const misLikes = count > 0 ? `${count} Me gusta` : "Like!";
    return(
         <Button onClick={()=>setCount(count+1)}>
                        {misLikes}
                    </Button>
    )
}
export default LikeButton;