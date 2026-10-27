import Gallery from './components/Gallery'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Photo Gallery</h1>
        <Gallery />
      </div>
    </div>
  )
}