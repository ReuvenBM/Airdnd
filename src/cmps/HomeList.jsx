import { HomePreview } from "./HomePreview.jsx";

export function HomeList({ homes }) {
    const limitedHomes = homes.slice(0, 4) // show only first 4
    return (
        <ul className="home-list">
            {limitedHomes.map(home =>
                <li className="home-preview" key={home._id}>
                    <HomePreview home={home} />
                </li>
            )}
        </ul>
    )
}