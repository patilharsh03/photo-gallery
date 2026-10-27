import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";

export default function Gallery() {
    const { photos, loading, error } = useFetchPhotos()

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo) => (
                <PhotoCard
                    key={photo.id}
                    photo={photo}
                    isFavourite={false}
                    onToggleFavourite={() => { }}
                />
            ))}
        </div>
    )
}