import { Link } from 'react-router-dom'
import { getFormattedDateRange } from "../services/home/home.service"
import { FaStar } from 'react-icons/fa';
import { useSelector } from "react-redux"


export function HomePreview({ home }) {
    const dateRange = getFormattedDateRange() // returns something like "Jul 15–17"
        return (
        <article className="home-preview">
            <img src={home.imgUrls[0]} alt={home.title} />
            <h4 >{home.title}</h4>
            <p >{dateRange}</p>
            <p >{home.price}₪ for 1 night</p>
            <p >
                <FaStar className="star-icon" />
                {home.rating}
            </p>
        </article>
    )
}
