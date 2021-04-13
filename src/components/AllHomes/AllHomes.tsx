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

export const AllHomes: React.FC = () => {

  const dispatch = useDispatch()
  const data = useSelector((state: AppStateType) => state.homesReducer.data)

  if (data === null) dispatch(actions.getHomes())

   return( 
    <div className="container">
      <div className="row all-homes">
        { data === null &&
          <Loader/>
        }
        {
          data?.length !== 0 &&
          data?.map((home: ValueStateType) => ( 
            <NavLink to={`/details/${home.id}`} className="nav-link" >
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
          <div className="row all-homes-bottom">
            <div className="col-12 actions">
              <button className="btn btn-light">
                <span>See more <i className="arrow right"></i></span>
              </button>
            </div>
          </div>
        }
    </div>
  )
}