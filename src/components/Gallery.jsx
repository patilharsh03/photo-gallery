import { useState, useCallback, useMemo, useReducer, useEffect } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import {
    favouritesReducer,
    loadFavourites,
    STORAGE_KEY,
} from "../reducers/favouritesReducer"

export default function Gallery() {
    const { photos, loading, error } = useFetchPhotos()
    const [searchTerm, setSearchTerm] = useState('')
    const [favourites, dispatch] = useReducer(
        favouritesReducer,
        [],
        loadFavourites
    )

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
    }, [favourites])

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value)
    }, [])

    const filteredPhotos = useMemo(() => {
        const term = searchTerm.trim().toLowerCase()
        if (!term) return photos
        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(term)
        )
    }, [photos, searchTerm])

    const handleToggleFavourite = (id) => {
        dispatch({ type: 'TOGGLE_FAVOURITE', payload: id })
    }

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
            </div>
        )
    }

    if (error) {
        return (
            <p className="py-20 text-center text-red-600">
                Something went wrong: {error}
            </p>
        )
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by author..."
                className="mb-6 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {filteredPhotos.map((photo) => (
                    <PhotoCard
                        key={photo.id}
                        photo={photo}
                        isFavourite={favourites.includes(photo.id)}
                        onToggleFavourite={handleToggleFavourite}
                    />
                ))}
            </div>
        </div>
    )
}