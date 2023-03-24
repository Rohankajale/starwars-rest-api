import { Link } from "react-router-dom"
import React from "react"

const Navbar = () =>  {
    return(
    <header>
        <div className= "container">
            <Link to = '/' >
            {/* <a href="https://www.starwars.com/databank"> */}
                <img src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png" alt="Star Wars" width = '175' height = '100' />
            {/* </a> */}
            </Link>
        </div>
    </header>
)}

export default Navbar