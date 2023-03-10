import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { setChatFilter } from '../reducers/filterReducer'

const SearchBar = (props) => {
    const chatFilter = useSelector(state=>state.filters.chatFilter)
    const dispatch = useDispatch()
    return(
        <div id="search">
            <div className="search-bar">
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass}/>
                <input placeholder='Busca un chat o inicia uno nuevo' value={chatFilter} onChange={(event)=>dispatch(setChatFilter(event.target.value))}/>
            </div>
            <div className="search-filter-icon">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px">
                    <path fill="currentColor" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
                </svg>
            </div>
        </div>
    )
}

export default SearchBar