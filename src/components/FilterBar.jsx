import React, { useState } from 'react';

export default function FilterBar({ options, onFilter, resource }) {
  const [value, setValue] = useState("");

  function onFilterHelper(resource) {
    const prop = document.querySelector('#filtro__prop').value.toLowerCase();
    onFilter(prop, value, resource);
    document.querySelector('.loading').style.display = 'block';
    }

  return (
    <div className='filterBar'>
      <form onSubmit={(e) => {
        e.preventDefault();
        onFilterHelper(resource);
        setValue('');
      }}>
      <select name='propiedad' id='filtro__prop'>
        <option value=''>Choose a prop</option>
        {options.map(item => {
          return <option value={item} key={item}> {item} </option>
        })}
      </select>
        <input
          type="text"
          placeholder="Value"
          value={value}
          id='filtro__val'
          onChange={e => setValue(e.target.value)}
          />
      </form>
    </div>
  )
}
