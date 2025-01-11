import Footer from "../Footer";
import Header from "../Header";
import Logistic from "./Logistic";
import Shipment from "./Shipment";

function Home(){
    return(
        <div>
            <Header/>
            <Shipment/>
            <Logistic/>
            <Footer/>
        </div>
    )
}
export default Home;