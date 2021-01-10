import React from "react";

export default function Header(props){
    return(
        <div className="block">
            
                <a href="/">
                    <h1>Small Shopping Cart</h1>
                </a>
                <span>
                    <a href="/">Cart</a>
                    &nbsp;
                    <button className="remove">{props.count}</button>
                </span>
            
        </div>
    );
}