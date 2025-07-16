//import { storageService } from '../async-storage.service'
//import { makeId } from '../util.service'
//import { userService } from '../user'

const STORAGE_KEY = 'home'

export const homeService = {
    query,
    getById,
    save,
    remove,
    getEmptyHome
}
window.hs = homeService

async function query(filterBy = { txt: '', maxPrice: 0 }) {
    var homes = await storageService.query(STORAGE_KEY)
    const { txt, maxPrice, capacity, sortField, sortDir } = filterBy

    if (txt) {
        const regex = new RegExp(txt, 'i')
        homes = homes.filter(home => regex.test(home.title) || regex.test(home.description))
    }
    if (maxPrice) {
        homes = homes.filter(home => home.price <= maxPrice)
    }
    if (capacity) {
        homes = homes.filter(home => home.capacity >= capacity)
    }

    if (sortField) {
        homes.sort((a, b) => {
            const valA = a[sortField]
            const valB = b[sortField]
            return (typeof valA === 'string'
                ? valA.localeCompare(valB)
                : valA - valB) * +sortDir
        })
    }

    return homes.map(({ _id, title, price, capacity, location }) => ({ _id, title, price, capacity, location }))
}

function getById(homeId) {
    return storageService.get(STORAGE_KEY, homeId)
}

async function remove(homeId) {
    await storageService.remove(STORAGE_KEY, homeId)
}

async function save(home) {
    var savedHome
    if (home._id) {
        savedHome = await storageService.put(STORAGE_KEY, home)
    } else {
        const homeToSave = {
            ...home,
            _id: makeId(),
            //host: userService.getLoggedinUser(),
            unavailableDates: []
        }
        savedHome = await storageService.post(STORAGE_KEY, homeToSave)
    }
    return savedHome
}

function getEmptyHome() {
    return {
        title: '',
        description: '',
        price: getRandomIntInclusive(100, 1000),
        capacity: getRandomIntInclusive(1, 10),
        type: 'apartment',
        imgUrls: [],
        location: {
            country: '',
            city: '',
            address: '',
            lat: 0,
            lng: 0
        },
        amenities: [],
        //host: userService.getLoggedinUser(),
        //msgs: [], maybe if we want will add this with reviews
        unavailableDates: [],
        createdAt: Date.now()
    }
}


