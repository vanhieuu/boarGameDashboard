import React from 'react'
import { ListCardTemp } from '@app/components/templates/listCard'
import { useSelector } from 'react-redux'
import { RootState } from '@app/assets/store/store'
import { Cards } from '@app/ultils/type'

const ListCardPage = () => {
    const cards:Cards[] = useSelector<RootState,any>(state => state.app.dataCard)

  return <ListCardTemp listCards={cards}  />
}

export default ListCardPage

