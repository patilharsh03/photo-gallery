export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow">
            <img
                src={`https://picsum.photos/id/${photo.id}/400/300`}
                alt={`Photo by ${photo.author}`}
                loading="lazy"
                className="h-48 w-full object-cover"
            />
            <div className="flex items-center justify-between p-3">
                <p className="truncate text-sm font-medium text-gray-800">
                    {photo.author}
                </p>
                <button
                    onClick={() => onToggleFavourite(photo.id)}
                    aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
                    className="ml-2 shrink-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`h-6 w-6 ${isFavourite ? 'fill-red-500 text-red-500' : 'fill-none text-gray-500'
                            }`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}