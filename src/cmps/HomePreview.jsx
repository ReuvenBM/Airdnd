import { Link } from 'react-router-dom'

export function HomePreview({ home }) {
    console.log('home HomePreview', home)
    return (
        <article className="home-preview">
            <h3>{home.title}</h3>
            {/* <h4>{home.vendor}</h4>
            <img src={home.imgUrl} alt={home.name} />
            <p>Price: <span>${home.price.toLocaleString()}</span></p>
            {home.name && <p>Name: {home.name}</p>}
            <div className="actions">
                <Link to={`/home/edit/${home._id}`}>Edit</Link>
                <span>|</span>
                <Link to={`/home/${home._id}`}>Details</Link>
                <span>|</span>
                <button onClick={() => onRemoveHome(home._id)} title="Delete">×</button>
            </div> */}
        </article>
    )
}
