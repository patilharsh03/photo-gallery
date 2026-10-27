import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";

export default function Gallery() {
    const { photos } = useFetchPhotos()

    return (
        <div className="grid grid-cols-4 gap-6">
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