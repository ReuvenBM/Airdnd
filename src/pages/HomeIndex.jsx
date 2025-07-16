import { useSelector } from "react-redux"
import { useEffect } from "react"
import { loadHomes } from "../store/home/home.action"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service"

export function HomeIndex() {
  const homes = useSelector((storeState) => storeState.homeModule.home)

  const filterBy = null

  useEffect(() => {
    loadHomes()
  }, [filterBy])

  return <p>HomeIndex</p>
}
