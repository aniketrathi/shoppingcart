import React from "react";

export default function Main(props){
    const {products , onnAdd} = props;
    const product = products.map((prod) => {
        return(
            <div key={prod.id} className="col-lg-4">
                <img className="small" src={`/shoppingcart/${prod.image}`} alt={prod.name} ></img>
                <h5>{prod.name}</h5>
                <div>${prod.price}</div>
                <div>
                    <button onClick={() => onnAdd(prod)}>Add to Cart</button>
                </div>
            </div>
        );
    });
    return(
        <div className="col-md">
            <div className="block">
                <h2>Products</h2>
                <div className="row">
                    {product}
                </div>
            </div>
        </div>
    );
}