import classnames from "classnames";
import './TestimonialWithImage.css'
import { BiSolidQuoteAltLeft } from "react-icons/bi"

export default function TestimonialWithImage({ mobile, image, text, name, about, className, ...rest }) {
    const modifier = mobile ? "--mobile" : ""
    return (
        <div className={classnames(`TestimonialWithImage${modifier}`, className)}>
            <div className={`TestimonialWithImage__content${modifier}`}>
                <div className={`TestimonialWithImage__img${modifier}`} >
                    <img src={image} />
                </div>
                <div className={`TestimonialWithImage__text-content${modifier}`}>
                    <span className='TestimonialWithImage__icon'>{<BiSolidQuoteAltLeft />}</span>
                    <p className='TestimonialWithImage__text'>{text}</p>
                    <p className='TestimonialWithImage__name'>{name}</p>
                    <p className='TestimonialWithImage__about'>{about}</p>
                </div>
            </div>     
        </div>
    )
}