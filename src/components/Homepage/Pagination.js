import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from 'react-bootstrap/Pagination';


const Pagintion = ({postsPerPage, data, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i<= Math.ceil(data/postsPerPage); i++){
    pageNumbers.push(i)
  }
   
  return (
      
   
    <nav>
    <ul className='pagination'>
    {pageNumbers.map(number => (
      <li key={number} className='page-item'>
      <a href='#!' onClick={()=> paginate(number)} className='page-link' >
        {number}
      </a>

      </li>
    ))}

    </ul>
    
    </nav>
  )
}

export default Pagintion

