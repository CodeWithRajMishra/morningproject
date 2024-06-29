import { Link, Outlet } from "react-router-dom"



const Layout=()=>{
    return(
        <>
           <Link to="home">Home</Link> |
           <Link to="about">About us</Link> |
           <Link to="service">Our Services</Link> |
           <Link to="contact" >Contact us</Link>
           <hr size="4" color="blue"/>

               <Outlet />

           <hr size="4" color="blue"/>
           www.myconpany.com all right reserved. 2024

        
        </>
    )
}


export default  Layout;