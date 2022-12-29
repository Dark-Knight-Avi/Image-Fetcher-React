import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import { Photo } from '../interfaces'

type SearchProps = {
    query: string,
    setQuery: Dispatch<SetStateAction<string>>,
    setPhotos: Dispatch<SetStateAction<Photo[]>>
}

const getPhotos = async (query: string) => {
    const url = 'https://simple-api.dark-knight-avi.workers.dev'
    const photos: Photo[] = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    }).then((res) => res.json())
    return photos
}


const Search: FC<SearchProps> = ({ setPhotos, query, setQuery }) => {
    return (
        <div className='my-10 mx-10 flex-1 w-[100%] flex justify-center items-center'>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} className='border-2 border-black outline-none px-3 py-2 mx-5 flex-1' type="text" placeholder='search for image' />
            <button onClick={async () => setPhotos(await getPhotos(query))} className='bg-slate-800 text-white px-3 mx-5 py-2 hover:bg-slate-600 active:bg-slate-700'>Search</button>
        </div>
    )
}

export default Search
