import Hero from "../../component/Hero/Hero";
import NewCollection from "../../component/NewCollection/NewCollection";
import Newsletter from "../../component/Newsletter/Newsletter";
import Offers from "../../component/Offers/Offers";
import Popular from "../../component/Popular/Popular";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <Newsletter/>
        </div>
    );
};

export default Shop;