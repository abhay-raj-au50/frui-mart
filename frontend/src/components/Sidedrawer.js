 import './Sidedrawer.css'
 import { Link } from 'react-router-dom'

 const Sidedrawer = ({ show, click }) => {
     const sideDrawerClass = ["sidedrawer"];

     if (show) {

         sideDrawerClass.push("show");
     }
     return <div className = { sideDrawerClass.join(" ") } >
         <
         ul className = 'sidedrawer_links'
     onClick = { click } >
         <
         li >
         <
         Link >
         <
         i className = 'fas fa-shopping-cart' > < /i> < /
         Link > <
         /li>

     <
     /ul> < /
     div > ;
 };
 export default Sidedrawer;