import { Link } from 'react-router-dom'
import { getFormattedDateRange } from "../services/home/home.service"
import { FaStar } from 'react-icons/fa';
const dateRange = getFormattedDateRange() // returns something like "Jul 15–17"

export function HomePreview({ home }) {
    const base = '/Airdnd';
    const imgUrl = base + home.imgUrls[0];

    return (
        <article className="home-preview">
            <img src={imgUrl} alt={home.title} />
            <h4>{home.title}</h4>
            <p>{dateRange}</p>
            <p>{home.price}₪ for 1 night</p>
            <p className="rating">
                <FaStar className="star-icon" />
                {home.rating}
            </p>
        </article>
    )
}
