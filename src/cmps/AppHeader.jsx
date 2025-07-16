import { AirdndIcon } from "./AirdndIcon"
import { useNavigate, Link } from "react-router-dom"

export function AppHeader() {
  const navigate = useNavigate()
  return (
    <section className="header">
      <Link to="/">
        <AirdndIcon />
      </Link>
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  )
}
