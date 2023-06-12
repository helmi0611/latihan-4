import React from 'react'
import './Vehicle.css';
import { useState } from 'react';

const Vehicle = ({ carName, carImage, carDesk, carMerk }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  
  };

  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const [like,setLike] = useState(true);
  function likeChanger (){
    setLike(!like);
}


  return (
    <div className='container'>
      <div className='card-product'>
        <h2>{carName}</h2>

        <img style={{ width: 250, height: 150, borderRadius: 8, }} src={carImage} alt={carName} />
        <button style={{background :like ? 'blue':'red', padding:'5px', margin:'5px', borderRadius:'8px'}}onClick={()=>likeChanger()}>{like? "! Suka":"Batal Suka"}</button>        
        <button style={{padding:'5px', margin:'5px', borderRadius:'8px'}} onClick={toggleDescription}>
        {showDescription ? 'Sembunyikan Deskripsi' : 'Selengkapnya'}
        </button>

        {showDescription && <p>{carDesk}</p>}
      </div>
    </div>
  );
};

export default Vehicle