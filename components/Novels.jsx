import React, { useState, useEffect } from 'react'
import Search from './Search'
import Novel from './Novel'
import { filterNovels, retrieveNovels } from '../utils/novels'

export default () => {
  const [filteredNovelList, setFilteredNovelList] = useState([])
  const [novelList, setNovelList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      const novels = await retrieveNovels()

      setNovelList(novels)
      setFilteredNovelList(novels)
    }
    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterNovels(novelList, searchTerm)

    setFilteredNovelList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Great Novels</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredNovelList.map(novel => (
          <Novel
            key={novel.id}
            id={novel.id}
            title={novel.title}
            author={`${novel.author.nameFirst} ${novel.author.nameLast}`}
          />
        ))
      }
    </div>
  )
}