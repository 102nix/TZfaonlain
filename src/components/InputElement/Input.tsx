import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/allAC'
import './Input.scss'
//types:
import { AppStateType } from '../../redux/store'
import { IValuesInput } from '../../types/InputTypes'
import { ArrayStateType } from '../../types/stateType'

export const Input: React.FC<IValuesInput> = ({label, ...props}) => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const data = useSelector((state: AppStateType) => state.homesReducer.data)

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value
    setValue(filterValue)
    
    if (filterValue.length >= 3) {
      const filteredDataArr: ArrayStateType = data!.filter(home => home.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1)
      dispatch(actions.setAPIHomes(filteredDataArr))
    } else if (filterValue.length === 0) {
      dispatch(actions.getHomes()) 
    }

  }

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...props}
        value={value}
        onChange={(e) => filterHandler(e)}
      />
    </>
  )
}
