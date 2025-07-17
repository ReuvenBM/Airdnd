import { useState } from "react";
import { HomePreview } from "./HomePreview.jsx";
import { Link } from 'react-router-dom'

export function HomeList({ homes }) {
    const [startIdx, setStartIdx] = useState(0);
    const itemsPerPage = 4; // Number of homes to show at once
    const total = homes.length;

    const next = () => {
        setStartIdx((prev) => Math.min(prev + 1, total - itemsPerPage));
    };

    const prev = () => {
        setStartIdx((prev) => Math.max(prev - 1, 0));
    };


    const visibleHomes = homes.slice(startIdx, startIdx + itemsPerPage);

    return (
        <section className="home-carousel">
            <div className="home-carousel-header">
                <button onClick={prev} disabled={startIdx === 0}>&larr;</button>
                <button onClick={next} disabled={startIdx >= total - itemsPerPage}>&rarr;</button>
            </div>

            <ul className="home-list">
                {visibleHomes.map(home => (
                    <li className="home-preview" key={home._id}>
                        <Link to={`/home/${home._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <HomePreview home={home} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
