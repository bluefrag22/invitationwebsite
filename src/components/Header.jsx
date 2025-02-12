import { useState } from "react";
import Carousel from "./Carousel";
import '../stylesheet/Header.css'; // If inside src/styles/
import Headertext from "./Headertext";


function Header() {

    

    const secondcarousel = [
        'public/img/IMG-20250210-WA0012.jpg',
        'public/img/IMG-20250210-WA0009.jpg',
        'public/img/IMG-20250210-WA0011.jpg',
        'public/img/IMG-20250210-WA0018.jpg',
    ];
    const headertext = (
        <div>
            <h1></h1>
           
        </div>
    )

    const headertext2 = (
        <div>
            <h1></h1>
        </div>
    )
        
     return (
     <section className="header">
     <div className="maincontainer">
        <div className="container">
          <Headertext header  = "Lulu’s Rainbow Picnic" tagline ="Join us for a colorful picnic with Lulu! Pick a color, bring snacks in that color, and enjoy the feast!"/>
          <Carousel image = {secondcarousel}/>
        </div>
        
        
     </div>

    




     </section>)
}

export default Header;