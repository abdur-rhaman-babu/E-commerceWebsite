import new_collections from '../Assets/new_collections';
import Items from '../Items/Items';
import './NewCollection.css'

const NewCollection = () => {
    
    return (
        <div className="container">
            <div className="new_collections">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="new_Collection">
                {new_collections && new_collections.map((data)=>{
                        return <Items key={data.id} data = {data}/>
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default NewCollection;