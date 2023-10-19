import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from 'react-bootstrap/Pagination';


const Pagintion = ({postsPerPage, data}) => {

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
  return (
      
   
    <>
    <div >
    <Pagination>{items}</Pagination>
      
    </div>
    </>
  )
}

export default Pagintion

