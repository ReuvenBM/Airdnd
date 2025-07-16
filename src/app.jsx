import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import {AppFooter} from './cmps/AppFooter'
import { MainPage } from "./pages/MainPage"
import { HomeDetails } from "./pages/HomeDetails"
import {UserMsg} from './cmps/UserMsg'
import './assests/main.scss'

export function App() {
  return (
    <section className="app">
      <Router>
        <AppHeader />
        <main className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home/:homeId" element={<HomeDetails />} />
          </Routes>
        </main>
        <AppFooter />
        <UserMsg />
      </Router>
    </section>
  )
}

export default App