import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loadHomes } from "../store/home/home.action"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service"
import { getFormattedDateRange } from "../services/home/home.service"
import { HomesList } from "./HomesList.jsx"
import arrow1 from "../../public/icons/arrow1.svg"
const dateRange = getFormattedDateRange() // returns something like "Jul 15–17"

export function HomeIndex() {
    const homes = useSelector((storeState) => storeState.homeModule.homes)
    const filterBy = {} // will add later

    useEffect(() => {
        loadHomes(filterBy)
            .then(homes => {
                showSuccessMsg('Load homes successfully')
            })
            .catch(err => {
                showErrorMsg('Cannot load homes')
            })
    }, [])
console.log('homes', homes)
    return (
        <>
            <AppHeader />

            <div className="home-index">
                <hr />

                <ul className="home-list">
                    {homes.map(home => (
                        <li className="home-preview" key={home._id}>
                            <Link to={`/home/${home._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <HomePreview home={home} />
                            </Link>
                        </li>
                    ))}
                </ul>

                <hr />
            </div>

            <AppFooter />
        </>
    )
}
