import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loadHomes } from "../store/home/home.action"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service"
import { getFormattedDateRange } from "../services/home/home.service"
import { HomeList } from "../cmps/HomeList.jsx"
import arrow1 from "../../public/icons/arrow1.svg"
import { Link } from "react-router-dom"
const dateRange = getFormattedDateRange() // returns something like "Jul 15–17"

export function HomePage() {
  const filterBy = {} //will add later

  useEffect(() => {
    loadHomes(filterBy)
      .catch(err => {
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

      <div className="text-with-icon">
        <Link to="/home" className="text-with-icon">
          Available for similar dates
          <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
        </Link>
        <HomeList />
      </div>

      <div className="text-with-icon">
        <Link to="/home" className="text-with-icon">
          Stay in Aegina
          <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
        </Link>
        <HomeList />
      </div>

      <div className="text-with-icon">
        <Link to="/home" className="text-with-icon">
          Popular homes in Lavreotiki
          <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
        </Link>
        <HomeList />
      </div>

      <div className="text-with-icon">
        <Link to="/home" className="text-with-icon">
          Guests also checked out Glyfada
          <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
        </Link>
        <HomeList />
      </div>

      <div className="text-with-icon">
        <Link to="/home" className="text-with-icon">
          Homes in Markopoulo Mesogaias
          <img src={arrow1} alt="Arrow icon" className="arrow-icon" />
        </Link>
        <HomeList />
      </div>
      <hr />
    </div>

  )

}