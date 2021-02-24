import React from 'react';
import { StyledCharacters } from './styled/StyledCharacters.jsx';
import FilterBar from '../components/FilterBar.jsx';
import Card from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';

export default function Characters({ onFilter, characters }) {
  const resource = 'character';
  return (
    <StyledCharacters>
      <div className='top'>
        <div className='title'>
          <h1> Characters </h1>
        </div>
        <FilterBar options={['Name', 'Gender', 'Species', 'Status', 'Type']}
          onFilter={onFilter}
          resource={resource} />
      </div>
      <Loader name='loading' />
      <div className='card__container'>
        {characters.map(c => {
          return (
            <Card
              key = {c.id}
              id = {c.id}
              name = {c.name}
              status = {c.C_status}
              specie = {c.C_species}
              episodes = {c.C_episodes}
              location = {c.C_location}
              />
          )
        })}
      </div>

      <div className='buttons'>
        <button className='backPage'> Back </button>
        <button className='nextPage'> Next </button>
      </div>
    </StyledCharacters>
  )
}
