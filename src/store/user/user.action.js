import { userService } from "../../services/user.service.js"
import { store } from "../store"

import { SET_USER, LOGOUT, REMOVE_USER, SET_USERS } from "./user.reducer.js"

export async function loadUsers() {
  try {
    const users = await userService.getUsers()
    store.dispatch({ type: SET_USERS, users })
  } catch (err) {
    console.log("user.actions: cannot load users", err)
  }
}
export async function updateFavoritesUser(userId, homeId) {
  try {
    const user = await userService.getById(userId)

    const idx = user.favorites.indexOf(homeId)

    if (idx === -1) {
      user.favorites.push(homeId)
    } else {
      user.favorites.splice(idx, 1)
    }

    const updatedUser = await userService.update(user)

    store.dispatch({ type: SET_USER, user: updatedUser })
    store.dispatch({ type: SET_USERS, users: await userService.getUsers() })

    return updatedUser
  } catch (err) {
    console.log("user.actions: cannot update user", err)
  }
}

export async function removeUser(userId) {
  try {
    await userService.remove(userId)
    store.dispatch({ type: REMOVE_USER, userId })
  } catch (err) {
    console.log("user.actions: cannot remove user", err)
  }
}

export async function login(credentials) {
  try {
    const user = await userService.login(credentials)
    store.dispatch({ type: SET_USER, user })
    return user
  } catch (err) {
    console.log("user.actions: cannot login", err)
    throw err
  }
}

export async function signup(credentials) {
  try {
    const user = await userService.signup(credentials)
    store.dispatch({ type: SET_USER, user })
    return user
  } catch (err) {
    console.log("user.actions: cannot signup", err)
    throw err
  }
}

export async function logout() {
  try {
    await userService.logout()
    store.dispatch({ type: LOGOUT })
  } catch (err) {
    console.log("user.actions: cannot logout", err)
    throw err
  }
}
