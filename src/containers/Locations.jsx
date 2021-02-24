import React, { useState } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import { StyledLocations } from './styled/StyledLocations.jsx';
import { StyledModal as Modal } from '../components/styled/StyledModal.jsx';
import Card from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';

export default function Locations({ onFilter, locations }) {
  const resource = 'location';
  const [residents, setResidents] = useState([]);

  function showResidents(arr) {
    setResidents([]);
    let url;
    arr.forEach(item => {
      url = item;
      fetch(url)
      .then(r => r.json())
      .then((recurso) => {
          const newPJ = {
            name: recurso.name && recurso.name,
            status: recurso.status && recurso.status,
            species: recurso.species && recurso.species,
            type: recurso.type && recurso.type,
            gender: recurso.gender && recurso.gender,
            origin: recurso.origin && recurso.origin,
            location: recurso.location && recurso.location,
            image: recurso.image && recurso.image,
            episodes: recurso.episode && recurso.episode,
            id: recurso.id && recurso.id
          }
          setResidents(oldResidents => [...oldResidents, newPJ]);
        });
      })
      document.querySelector('#modalResidents').style.display='block';
    };

  return (
    <StyledLocations>
      <div className='top'>
        <div className='title'> <h1> Locations </h1> </div>
        <FilterBar options={['Name', 'Type', 'Dimension']}
          onFilter={onFilter}
          resource={resource} />
      </div>
      <Loader name='loading' />
      <Modal id='modalResidents' onClick={() => document.querySelector('#modalResidents').style.display= 'none'}>
        <div className='cards'>
          {residents.map(c => {
            return (
              <Card
                key = {c.id}
                id = {c.id}
                name = {c.name}
                status = {c.status}
                specie = {c.species}
                episodes = {c.episodes}
                location = {c.location}
                className = 'modalCard'
                />
            )
          }
        )}
      </div>
    </Modal>
      <div className='card__container'>
        {locations.map(c => {
          return (
            <div className='miniCard' key={c.id} onClick={() => showResidents(c.L_residents)}>
              <div> <h2> {c.name} </h2> </div>
              <div> <h5> {c.L_dimension} </h5> </div>
            </div>
          )
        })}
      </div>
      <div className='buttons'>
        <button className='backPage'> Back </button>
        <button className='nextPage'> Next </button>
      </div>
    </StyledLocations>
  )
}
