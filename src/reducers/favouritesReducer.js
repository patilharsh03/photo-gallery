export const STORAGE_KEY = 'photo-gallery-favourites'

export function favouritesReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_FAVOURITE': {
            const id = action.payload
            return state.includes(id)
                ? state.filter((favId) => favId !== id)
                : [...state, id]
        }
        default:
            return state
    }
}

export function loadFavourites() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
    } catch {
        return []
    }
}