import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loadHomes } from "../store/home/homes.action.js"
import { getFormattedDateRange } from "../services/home/home.service.js"
import { HomesList } from "../cmps/HomesList.jsx"
import arrow1 from "../../public/icons/arrow1.svg"
import { Link } from "react-router-dom"

const dateRange = getFormattedDateRange() // e.g. "Jul 15–17"

export function HomePage() {
  const filterBy = {} // will add later

  useEffect(() => {
    loadHomes(filterBy).catch(err => {
      // showErrorMsg('Cannot load homes')
      // redirect to error page or render error component
    })
  }, [])

  return (
    <div className="main-page">
      <hr />

      <div className="text-with-icon small">
        Continue searching for homes in Athens {dateRange} – 1 guest{" "}
        <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
      </div>

      <hr />

      <div className="section-wrapper">
        <div className="text-with-icon">
          <Link to="/home">
            Available for similar dates
            <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
          </Link>
        </div>
        <HomesList />
      </div>

      <div className="section-wrapper">
        <div className="text-with-icon">
          <Link to="/home">
            Stay in Aegina
            <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
          </Link>
        </div>
        <HomesList />
      </div>

      <div className="section-wrapper">
        <div className="text-with-icon">
          <Link to="/home">
            Popular homes in Lavreotiki
            <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
          </Link>
        </div>
        <HomesList />
      </div>

      <div className="section-wrapper">
        <div className="text-with-icon">
          <Link to="/home">
            Guests also checked out Glyfada
            <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
          </Link>
        </div>
        <HomesList />
      </div>

      <div className="section-wrapper">
        <div className="text-with-icon">
          <Link to="/home">
            Homes in Markopoulo Mesogaias
            <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
          </Link>
        </div>
        <HomesList />
      </div>

      <hr />
    </div>
  )
}
