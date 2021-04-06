import React from 'react'
import './FilterInput.scss'
import { Input } from '../InputElement/Input'

export const FilterInput: React.FC = () => {

  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Input
            label="Filter" 
            id="filter"
            type="text"
            name="filter" 
          />
        </div>
      </div>
    </div>
  )
}