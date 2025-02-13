import Carousel from "./Carousel";
import Headertext from "./Headertext";
import Header from "./Header";
import Detailss from "./Details";

function Aboutsection(){

    const firtcarousel = [
        './img/WhatsApp Image 2025-02-09 at 16.45.57_9f4e3196.jpg',
        './img/download (3).jpg'
    ]

    const location = () => {
        window.open('https://maps.app.goo.gl/dvS4zvBYttpNrSav7', '_blank');
    };

  

    return(
        <section className="aboutheader" >
            
            <div className="body">

                <Carousel image = {firtcarousel}/>

                <div className="text">
                        <h1 style={{fontSize:'15px', color:'white',textAlign:'right', textTransform:'capitalize',marginBottom:'5px'}}> what is lulu  Rainbow  picnic? </h1>
                        <p style={{fontSize:'13px', margin:'0px', textAlign:'right'}}> Lulu’s Colorful Feast is a unique picnic where each guest picks a color and brings matching food. Enjoy vibrant plates, good vibes, and great food! just fun! 🌈🎉🍽️</p>
                </div>

            </div>


            <div className="detaailsrow">
                <Detailss title="Date" content="23th  Feb" br />
                <Detailss title="Time" content="2pm" />
                <Detailss title="Location" content={<span className="small-text">Click for direction</span>} direction={location}/>
            </div>

           
        </section>
    )

}
export default Aboutsection;