import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './AllHomes.scss'
//action creaters:
import { actions } from '../../redux/allAC'
//types:
import { AppStateType } from '../../redux/store'
import { ValueStateType } from '../../types/stateType'
//components:
import Loader from '../../Loader/Loader'
import { Home } from '../Home/Home'
import { FilterInput } from '../FilterInput/FilterInput'

export const AllHomes: React.FC = () => {

  const dispatch = useDispatch()
  const data = useSelector((state: AppStateType) => state.homesReducer.data)

  if (data === null) dispatch(actions.getHomes())

   return( 
    <div className="all-homes">
      <div className="all-homes-title">Our Latest Developepments</div>
      <FilterInput />
      <div className="homes">
        { data === null &&
          <Loader/>
        }
        {
          data?.length !== 0 &&
          data?.map((home: ValueStateType) => ( 
            <NavLink to={`/details/${home.id}`} className="home-link" key={home.id}>
              <Home
                id={home.id}
                title={home.title}
                address={home.address}
                type={home.type}
                price={home.price}	
              />
            </NavLink>
          ))
        }
      </div>
      { 
        data !== null &&
        <div className="homes-actions">
          <button className="homes-btn">
            <span>See more <i className="arrow right"></i></span>
          </button>
        </div>
      }
    </div>
  )
}