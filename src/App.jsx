import useFetchPhotos from "./hooks/useFetchPhotos"

function App() {
  const { photos, loading, error } = useFetchPhotos()
  console.log({ photos, loading, error })

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600">Gallery</h1>
    </>
  )
}

export default App
