
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'home'

export const homeService = {
    query,
    getById,
    save,
    remove,
    addHomeMsg
}
window.cs = homeService


async function query(filterBy = { txt: '', price: 0 }) {
    var homes = await storageService.query(STORAGE_KEY)
    const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        homes = homes.filter(home => regex.test(home.vendor) || regex.test(home.description))
    }
    if (minSpeed) {
        homes = homes.filter(home => home.speed <= minSpeed)
    }
    if (maxPrice) {
        homes = homes.filter(home => home.price <= maxPrice)
    }
    if (sortField === 'vendor' || sortField === 'owner') {
        homes.sort((home1, home2) =>
            home1[sortField].localeCompare(home2[sortField]) * +sortDir)
    }
    if (sortField === 'price' || sortField === 'speed') {
        homes.sort((home1, home2) =>
            (home1[sortField] - home2[sortField]) * +sortDir)
    }

    homes = homes.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
    return homes
}

function getById(homeId) {
    return storageService.get(STORAGE_KEY, homeId)
}

async function remove(homeId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, homeId)
}

async function save(home) {
    var savedHome
    if (home._id) {
        const homeToSave = {
            _id: home._id,
            price: home.price,
            speed: home.speed,
        }
        savedHome = await storageService.put(STORAGE_KEY, homeToSave)
    } else {
        const homeToSave = {
            vendor: home.vendor,
            price: home.price,
            speed: home.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedHome = await storageService.post(STORAGE_KEY, homeToSave)
    }
    return savedHome
}

async function addHomeMsg(homeId, txt) {
    // Later, this is all done by the backend
    const home = await getById(homeId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    home.msgs.push(msg)
    await storageService.put(STORAGE_KEY, home)

    return msg
}