import { useState, useEffect } from "react";

const API_URL = 'https://picsum.photos/v2/list?limit=30'

export default function useFetchPhotos() {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch(API_URL)
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`)
                }
                const data = await response.json()
                setPhotos(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPhotos()
    }, [])

    return { photos, loading, error }
}