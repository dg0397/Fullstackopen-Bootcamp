import React, { useState } from 'react'
import SingleCountry from "./SingleCountry";

const Country = ({country}) => {
    const [show,setShow] = useState(false);
    
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div>
            {country.name}
            <button onClick = {handleClick}>{ show ? "Hide" : "Show"}</button>
            {show && <SingleCountry country={country} />}
        </div>
    )
}

export default Country
