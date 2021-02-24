import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Locations from './containers/Locations.jsx';
import Characters from './containers/Characters.jsx';
import Episodes from './containers/Episodes.jsx';
import Inicio from './containers/Inicio.jsx';
import GlobalStyle from './GlobalStyle.jsx';

function App() {
	const [pj, setPJ] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [locations, setLocations] = useState([]);
	const [episodes, setEpisodes] = useState([]);

	function onSearch(arg) {
		setPJ([]);
		const url = `https://rickandmortyapi.com/api/character/?name=${arg}`;
		fetch(url)
			.then(r=> r.json())
			.then((recurso) => {
				if(recurso.results){
					recurso.results.forEach(item => {
						const newPJ = {
							name: item.name && item.name,
							status: item.status && item.status,
							species: item.species && item.species,
							type: item.type && item.type,
							gender: item.gender && item.gender,
							origin: item.origin && item.origin,
							location: item.location && item.location,
							image: item.image && item.image,
							episodes: item.episode && item.episode,
							id: item.id && item.id
						}
						setPJ(oldCharacters => [...oldCharacters, newPJ]);
					});

				}
			})
			document.querySelector('#modalBusqueda').style.display = 'flex';
	}

	function onFilter(prop, val, resource, page = 1) {
		resource === 'character' ? setCharacters([]) : resource === 'location' ? setLocations([]) : setEpisodes([]);
		const url = `https://rickandmortyapi.com/api/${resource}/?${prop}=${val}&page=${page}`;
		fetch(url)
			.then(r => r.json())
			.then((recurso) => {
				if(recurso.results) {
					const next = document.querySelector('.nextPage');
					const back = document.querySelector('.backPage');
					back.onclick = () => onFilter(prop, val, resource, page-1);
					next.onclick = () => onFilter(prop, val, resource, page+1);
					if(recurso.info.next) {
						next.style.display = 'block';
					} else {
						next.style.display = 'none';
						back.style.width = '100%';
					}
					if(recurso.info.prev) {
						back.style.display = 'block';
					} else {
						back.style.display = 'none';
						next.style.width = '100%';
					}
					if(back.style.display === 'block') {
						next.style.width= '50%';
					}
					if(next.style.display === 'block') {
						back.style.width= '50%';
					}
					document.querySelector('.loading').style.display = 'none';
					recurso.results.forEach((item) => {
						const newOne = {
							id: item.id,
							name: item.name && item.name,
							C_status: item.status && item.status,
							C_species: item.species && item.species,
							C_type: item.type && item.type,
							C_gender: item.gender && item.gender,
							C_origin: item.origin && item.origin,
							C_location: item.location && item.location,
							C_image: item.image && item.image,
							C_episodes: item.episode && item.episode,
							E_episode: item.episode && item.episode,
							E_characters: item.characters && item.characters,
							E_airDate: item.air_date && item.air_date,
							L_dimension: item.dimension && item.dimension,
							L_residents: item.residents && item.residents
						}
						switch (resource) {
							case 'character':
								setCharacters(oldCharacters => [...oldCharacters, newOne]);
								break;
							case 'location':
								setLocations(oldLocations => [...oldLocations, newOne]);
								break;

							case 'episode':
								setEpisodes(oldEpisodes => [...oldEpisodes, newOne]);
								break;

							default:
								console.log('No deberia llegar aca, el resource esta mal definido')
						}
					})
				}
			})
	}

	const [random, setRandom] = useState([]);

	function randomPJ(arg) {
		const arrID = [];
		for (let i = 0; i < arg; i++) {
			arrID.push(Math.floor(Math.random() * 671 + 0))
		}
			let url = `https://rickandmortyapi.com/api/character/`;
			arrID.forEach(item => {
				url += `,${item}`;
			});
			fetch(url)
				.then(r => r.json())
				.then((recurso) => {
					if(recurso.length) {
						recurso.forEach(item => {
							const newPJ = {
								name: item.name && item.name,
								status: item.status && item.status,
								species: item.species && item.species,
								type: item.type && item.type,
								gender: item.gender && item.gender,
								origin: item.origin && item.origin,
								location: item.location && item.location,
								image: item.image && item.image,
								episodes: item.episode && item.episode,
								id: item.id && item.id
							}
							setRandom(oldCharacters => [...oldCharacters, newPJ]);
						});
					}
				})
			}
	useEffect(() => randomPJ(20), []);

	const [mode, setMode] = useState(false);
	function changeMode() {
		setMode(!mode);
	}

	return (
		<div className="App" style={{height: "100%", position:'relative', minHeight: '100vh'}}>
			<GlobalStyle dark={mode}/>
			<Route path='/' render={() => <Nav onSearch={onSearch} pj={pj} changeMode={changeMode} />} />
			<Route exact path='/' render={() => <Inicio random={random} />} />
			<Route path='/locations' render={() => <Locations onFilter={onFilter} locations={locations} />} />
			<Route path='/characters' render={() => <Characters onFilter={onFilter} characters={characters} />} />
			<Route path='/episodes' render={() => <Episodes onFilter={onFilter} episodes={episodes} />} />
			<Route path='/' component={Footer} />
		</div>
	);
}

export default App;
