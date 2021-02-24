import React, { useState } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import { StyledEpisodes } from './styled/StyledEpisodes.jsx';
import { StyledModal as Modal } from '../components/styled/StyledModal.jsx';
import Card from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';

export default function Episodes({ onFilter, episodes }) {
  const resource = 'episode';
  const [characters, setCharacters] = useState([]);

  function showCharacters(arr) {
    setCharacters([]);
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
          setCharacters(oldCharacters => [...oldCharacters, newPJ]);
        });
      })
      document.querySelector('#modalCharacters').style.display='block';
    };

  return (
    <StyledEpisodes>
      <div className='top'>
        <div className='title'> <h1> Episodes </h1> </div>
        <FilterBar options={['Name', 'Episode']}
          onFilter={onFilter}
          resource={resource} />
      </div>
      <Loader name='loading' />
      <Modal id='modalCharacters' onClick={() => document.querySelector('#modalCharacters').style.display= 'none'}>
        <div className='cards'>
          {characters.map(c => {
            return (
              <Card
                key = {c.id}
                id = {c.id}
                name = {c.name}
                status = {c.status}
                specie = {c.species}
                episodes = {c.episodes}
                location = {c.location}
                />
            )
          }
        )}
      </div>
    </Modal>
      <div className='card__container'>
        {episodes.map(c => {
          return (
            <div className='miniCard' key={c.id} onClick={() => showCharacters(c.E_characters)}>
              <div> <h2> {c.name} </h2> </div>
              <div> <h5> {c.E_episode} </h5> </div>
              <div> <h5> {c.E_airDate} </h5> </div>
            </div>
          )
        })}
      </div>
      <div className='buttons'>
        <button className='backPage'> Back </button>
        <button className='nextPage'> Next </button>
      </div>
    </StyledEpisodes>
  )
}
