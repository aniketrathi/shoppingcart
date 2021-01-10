import React from "react";

export default function Basket(props){
    const {cartItems, onnAdd , onnRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const taxPrice = 0.14 * itemsPrice;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <div className="col-md-4">
            <div className="block">
                <h2>Cart Items</h2>
                <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-md-4">{item.name}</div>
                        <div className="col-md-4">
                            <button className = "add" onClick={() => onnAdd(item)}>+</button>
                            <button className = "remove" onClick={() => onnRemove(item)}>-</button>
                        </div>
                        <div className="col-md-4 text-right">
                            {item.qty} X ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {cartItems.length>0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-6">Items Price</div>
                            <div className="col-md-5 text-right">${itemsPrice}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">Tax Price</div>
                            <div className="col-md-5 text-right">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">shipping Price</div>
                            <div className="col-md-5 text-right">${shippingPrice}</div>
                        </div>
                        <div className="row">
                                <div className="col-md-6"><b>Total Price</b></div>
                                <div className="col-md-5 text-right"><b>${totalPrice}</b></div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}