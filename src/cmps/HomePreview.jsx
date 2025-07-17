import { Link } from 'react-router-dom'
import { getFormattedDateRange } from "../services/home/home.service"
import { FaStar } from 'react-icons/fa';
import { useSelector } from "react-redux"


export function HomePreview() {
    const homes = useSelector((storeState) => storeState.homeModule.homes)
    console.log('homes', homes)
    const dateRange = getFormattedDateRange() // returns something like "Jul 15–17"
    const base = '/Airdnd';
    const imgUrl = base + homes[0].imgUrls[0];
    const textStyle = {
        color: '#333',
        textDecoration: 'none',
        textDecorationLine: 'none',
        WebkitTextDecoration: 'none',
        MozTextDecoration: 'none'
    };
    return (
        <article className="home-preview">
            <img src={imgUrl} alt={homes[0].title} />
            <h4 style={textStyle}>{homes[0].title}</h4>
            <p style={textStyle}>{dateRange}</p>
            <p style={textStyle}>{homes[0].price}₪ for 1 night</p>
            <p style={{ ...textStyle, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <FaStar className="star-icon" />
                {homes[0].rating}
            </p>
        </article>
    )
}
