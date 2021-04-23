import React from 'react'
import './FilterInput.scss'
import { Input } from '../InputElement/Input'

export const FilterInput: React.FC = () => {

  return(
    <div className="filter">
      <Input
        label="Filter" 
        id="filter"
        type="text"
        name="filter" 
      />
    </div>
  )
}