import React, { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios';
import Loading from './Loading';
import '../../../node_modules/bootstrap/'
import  Pagination  from './Pagination';
import Pagintion from './Pagination';

const Home = () => {
  let [data, updatedata] = useState([]);

  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(12);
  

  useEffect(() => {
    show();
  });

  async function show() {
    var res = await axios.get("https://movies-r87g.onrender.com/Eyeglassrangeapi");
    updatedata(res.data);
    console.log(data)
    // alert('sucess')
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = pageNumbers => setCurrentPage(pageNumbers)

    
  return (
    <>
    <div className='Home-container'>
     <div className='movie-container'>
         {currentPosts.length===0?<Loading/>:currentPosts.map((v) =>{
           return (
             <div className='card' key={v.id}>
               <div className='card-image'>
                 <img src={v.image} alt='X' className='cimage' />
               </div>
               <div className='card-txt'>
                 <h5>Download {v.name}  <br />
                   Year {v.year} {v.category} <br />
                   Language:({v.language[0] === "english" ? 'English' : ''}{v.language[1] === "hindi" ? ',Hindi' : ''})</h5>
                 <a href={v.url} target='#'><button className='movie-btn'>Watch</button></a>
               </div>
             </div>
           )})}

     </div>
     
    </div>
    <div className='paginate-section'>
    <Pagintion postsPerPage={postsPerPage} data={data.length} paginate={paginate}/>
    
     </div>
      
    </>
  );
}

export default Home;
