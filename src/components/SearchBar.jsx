import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [pj, setPj] = useState("");
  return <div className='search'>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(pj);
      setPj('');
    }}>
      <input
        type="text"
        placeholder="Search"
        value={pj}
        onChange={e => setPj(e.target.value)}
      />
    </form>
  </div>
}
