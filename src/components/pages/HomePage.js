import React, { useState,useEffect } from 'react'
import { Link,} from 'react-router-dom'

export default function HomePage(props) {
    const [name,setname]= useState([]);
  
  
   console.log(props.location.search)  
    return (
        <div className="text-center">
            <h1>igisubizo</h1>
            <h3 className="main-title home-page-title">{props.message}</h3>
            <footer>
                <p><Link to="/">kwitangiriro</Link>.</p>
            </footer>
        </div>
    )
}
