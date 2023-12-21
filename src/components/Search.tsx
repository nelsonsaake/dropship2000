import { IconSearch } from '@tabler/icons-react'
import React from 'react'

const Search = () => {
  return (
    <div className="border bg-white border-stone-300 rounded-lg w-full overflow-hidden p-2 flex space-x-2 items-center">
        <IconSearch stroke={1.5} size={18} className="text-stone-700"/>
        <input className="outline-none bg-white"/>
    </div>
  )
}

export default Search