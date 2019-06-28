import React, { Component } from 'react';


const Purchase = (props) => {
    return (
        <div>
            <p> Summary </p>
            {
                props.items.map((item, i) => {
                    return (
                        <span key={i} id={`${item.id}`}>
                            <span>{item.TheName}</span>
                            <span>{item.email}</span>
                            <span>{item.ThePassword}</span>
                            <span>{item.line1}</span>
                            <span>{item.line2}</span>
                            <span>{item.city}</span>
                            <span>{item.TheState}</span>
                            <span>{item.zipCode}</span>
                            <span>{item.TheNumber}</span>
                            <span>{item.expiration}</span>
                            <span>{item.billingZipCode}</span>
                        </span>
                    )
                })
            }
            <button onClick={props.toHomePage}>purchase</button>
        </div>
    )
}

export default Purchase;