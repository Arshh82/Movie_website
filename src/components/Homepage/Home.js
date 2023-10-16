import React, { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios';
import Loading from './Loading';

const Home = () => {
  let [data, updatedata] = useState([]);

  useEffect(() => {
    show();
  });

  async function show() {
    var res = await axios.get("https://movies-r87g.onrender.com/Eyeglassrangeapi");
    updatedata(res.data);
    console.log(data)
    // alert('sucess')
  }
    
  return (
    <>
    <div className='Home-container'>
     <div className='movie-container'>
         {data.length===0?<Loading/>:data.map((v) =>{
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
      
    </>
  );
}

export default Home;
