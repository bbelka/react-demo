import React from "react";

function Card(props) {


    return (
        <div className="card">
            <div className="card-body">
                <h5>Email: {props.email}</h5>
                <h5>password: {props.password}</h5>
            </div>
        </div>
    )
}

export default Card;