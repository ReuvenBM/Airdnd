import { useSelector } from "react-redux"
import { useEffect } from "react"
import { loadHomes } from "../store/home/home.action"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service"

export function MainPage() {
  const homes = useSelector((storeState) => storeState.homeModule.home)
  const filterBy = null //will add later

  useEffect(() => {
    loadHomes()
  }, [filterBy])

  return <p>MainPage</p>
}
