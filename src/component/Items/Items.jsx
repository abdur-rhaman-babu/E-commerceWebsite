/* eslint-disable react/prop-types */
import './Items.css'
const Items = ({data}) => {
    const {image, name, new_price, old_price} = data;
    return (
        <div className="popular_item">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <div className="new_old_price">
            <p>{new_price}$</p>
            <p style={{textDecoration:'line-through',color:'red'}}>{old_price}$</p>
            </div>
        </div>
    );
};

export default Items;