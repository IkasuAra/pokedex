import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type} = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h4 className='data-id'>ID: #{id}</h4>
        <h1 className='data-name'> {name} </h1>
        <p className='data-char'>Type: {type}</p>
      </div>
    </section>
  )
}

export default DetailView;