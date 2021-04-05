import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
    return (
        <div className="card HomeCard">
            <Link className="Link" to={props.link}>
                <img className="card-img-top image-fluid" src={props.img}></img>

                <div className="card-body">
                    <h5 className="card-text mt-4 linkSize">
                        {props.name}
                    </h5>           
                </div>
            </Link>
        </div>
    )
}

export default HomeCard;