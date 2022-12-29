import { Dispatch, FC, SetStateAction, useState } from 'react'
import Search from './components/Search'
import './index.css'
import { Photo } from './interfaces'


const App: FC = () => {
  const [query, setQuery] = useState("")
  const [photos, setPhotos] = useState<null | Photo[]>(null)
  if(photos === null){
    return <div className='flex px-20 flex-col justify-center items-center'>
      <Search setPhotos={setPhotos as Dispatch<SetStateAction<Photo[]>>} query={query} setQuery={setQuery} />
      <p className="md:text-3xl sm:text-xl text-lg text-center text-blue-700 my-5">Search any image here. India's best Image Searcher.</p>
    </div>
  }

  if (photos?.length === 0) {
    return <div className='flex px-20 flex-col justify-center items-center'>
      <Search setPhotos={setPhotos as Dispatch<SetStateAction<Photo[]>>} query={query} setQuery={setQuery} />
      <p className="md:text-3xl sm:text-xl text-lg text-center text-red-600 my-5">No photos found...</p>
    </div>
  }

  return (
    <div className='flex px-20 flex-col justify-center items-center'>
      <Search setPhotos={setPhotos as Dispatch<SetStateAction<Photo[]>>} query={query} setQuery={setQuery} />

      <div className="flex justify-center px-5 flex-wrap">
        {photos && photos.map((photo) => {
          return (
            // <div className='flex flex-col justify-center items-center'>
            <img key={photo.id} className='mx-3 mt-3 mb-1' src={photo.image} alt={photo.link} />
            // <a className="bg-cyan-400 text-black text-lg hover:bg-cyan-500 active:bg-cyan-300" href={photo.image} download>Download</a>
            // </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
