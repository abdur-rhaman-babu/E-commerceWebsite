import Hero from "../../component/Hero/Hero";
import NewCollection from "../../component/NewCollection/NewCollection";
import Offers from "../../component/Offers/Offers";
import Popular from "../../component/Popular/Popular";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
        </div>
    );
};

export default Shop;