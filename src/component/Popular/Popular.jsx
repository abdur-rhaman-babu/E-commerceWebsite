import data_product from "../Assets/data";
import Items from "../Items/Items";
import './Popular.css'
const Popular = () => {

    return (
        <div className="container">
            <div className="popular_container">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular_items">
                {
                    data_product && data_product.map((data)=>{
                        return <Items key={data.id} data = {data}/>
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default Popular;