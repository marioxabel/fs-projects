/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import starImg from '../assets/star.png'
import './Card.css'
export default function Card(props) {
    // Since we are using Vite we need to pull this hack to import imgs from the props
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        import(`../assets/experiences/${props.coverImg}`)
            .then((image) => {
                setImageSrc(image.default);
            })
            .catch((error) => {
                console.log('Error loading image:', error);
            });
    }, [props.coverImg]);
    
    let badgeText = props.openSpots === 0 ? 'SOLD OUT' 
                        : props.location === 'Online' ? 'ONLINE'
                        : null

    return (
        <div className="card">
            {badgeText && <div className='badge'>{badgeText}</div>}
            <img src={imageSrc} alt="Experience" className='card--img'/>
            <div className="card--stats">
                <img src={starImg} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}
