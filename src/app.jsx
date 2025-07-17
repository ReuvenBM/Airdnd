import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import { AppFooter } from './cmps/AppFooter'
import { HomePage } from "./pages/HomePage"
import { HomeDetails } from "./pages/HomeDetails"
import { HomeList } from "./cmps/HomeList"
import { UserMsg } from './cmps/UserMsg'


export function App() {
  return (
    <section className="main-container">
      <Router>
        <AppHeader />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home/:homeId" element={<HomeDetails />} />
            <Route path="/list" element={<HomeList />} />
          </Routes>
        </main>
        <AppFooter />
        <UserMsg />
      </Router>
    </section>
  )
}

export default App