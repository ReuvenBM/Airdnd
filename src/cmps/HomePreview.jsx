import { Link } from 'react-router-dom'
import { getFormattedDateRange } from "../services/home/home.service"
import { FaStar } from 'react-icons/fa';
const dateRange = getFormattedDateRange() // returns something like "Jul 15–17"

export function HomePreview({ home }) {
    const base = '/Airdnd';
    const imgUrl = base + home.imgUrls[0];
    const textStyle = {
        color: '#333',
        textDecoration: 'none',
        textDecorationLine: 'none',
        WebkitTextDecoration: 'none',
        MozTextDecoration: 'none'
    };
    return (
        <article className="home-preview">
            <img src={imgUrl} alt={home.title} />
            <h4 style={textStyle}>{home.title}</h4>
            <p style={textStyle}>{dateRange}</p>
            <p style={textStyle}>{home.price}₪ for 1 night</p>
            <p style={{ ...textStyle, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <FaStar className="star-icon" />
                {home.rating}
            </p>
        </article>
    )
}
