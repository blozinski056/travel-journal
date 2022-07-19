import React from "react"

export default function Card(props) {
    return (
        // Horizontal card layout
        <div className="card">
            <img className="card-img" src={props.imgURL} />

            <div className="card-body">
                <div className="card-location">
                    <img className="card-location-icon" src="./images/location.png" />
                    <h5 className="card-location-country">{props.country}</h5>
                    <a className="card-location-link" href={props.mapsLink}>View in Google Maps</a>
                </div>

                <h1 className="card-title">{props.location}</h1>

                <h5 className="card-dates">{props.startDate} - {props.endDate}</h5>

                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}