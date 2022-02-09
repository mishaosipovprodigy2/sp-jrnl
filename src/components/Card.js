import React from 'react';
import '../index.css';
import locationicon from './locationicon.png'


export default function Card (props) {
    console.log(``)
    return (
        <div>
            <div className='card'>
            <div><img src={`../../public/images/${props.item.imageUrl}`} alt="img" className='card--img'/></div>
            <div className='card--info'>
            <div className='header'>
            <img alt ="icon"src={locationicon} width="25px"/>
             <span>{props.item.location}</span>
             <span><a target="_none"href={props.item.googleMapsUrl}>View on google maps</a></span>
             </div>
             <h2><b>{props.item.title}</b></h2>
             <h6>{props.item.startDate} . {props.item.endDate}</h6>
             <p>
                 {props.item.description}
             </p>
             
            


            </div>
            </div>
        </div>
    )
}


// title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"