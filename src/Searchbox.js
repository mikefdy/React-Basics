import React from 'react'

//SEARCHbar component 

const Searchbox = ({searchChange}) => {
    return(
        <div className='pa2'>
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type="search" 
        placeholder='search robots'
        onChange={searchChange}>
        </input>
        </div>
    );

}

export default Searchbox;