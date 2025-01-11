import Footer from "../Footer";
import ImageCarousel from "../Service/Caraousel";
import Growing from "../Service/Growing";
import Header from "../Header";
import Services from "../Service/Services";
function ServiceSection(){
    const slides = [
    { image: "https://5.imimg.com/data5/UO/LJ/GLADMIN-46328052/rail-transportation-services.jpg", alt: "Slide 3" },
    { image: "https://tlimagazine.com/wp-content/uploads/sites/9/2023/10/benefits-of-air-transport-image.jpeg", alt: "Slide 3" },
    { image: "https://static.vecteezy.com/system/resources/previews/015/411/447/non_2x/cargo-truck-transportation-commercial-transport-logistics-car-for-the-carriage-of-goods-flat-illustration-vector.jpg", alt: "Slide 3" },
    ];
    return(
        <div>
            <Header/>
            <div className="p-5">
                <ImageCarousel slides={slides}/>
            </div>
            <Growing/>
            <Services/>
            <Footer/>
        </div>
    )
}
export default ServiceSection;