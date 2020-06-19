import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewsItem from './NewsItem/NewsItem';

function App() {
	const item = {
		created_at: '2020-05-28T13:42:07.000Z',
		title: 'AudioMass – free, open source, web-based Audio and Waveform editor',
		url: 'https://audiomass.co/',
		author: 'zaiste',
		points: 895,
		story_text: null,
		comment_text: null,
		num_comments: 162,
		story_id: null,
		story_title: null,
		story_url: null,
		parent_id: null,
		created_at_i: 1590673327,
		_tags: [ 'story', 'author_zaiste', 'story_23337091', 'front_page' ],
		objectID: '23337091',
		_highlightResult: {
			title: {
				value: 'AudioMass – free, open source, web-based Audio and Waveform editor',
				matchLevel: 'none',
				matchedWords: []
			},
			url: { value: 'https://audiomass.co/', matchLevel: 'none', matchedWords: [] },
			author: { value: 'zaiste', matchLevel: 'none', matchedWords: [] }
		}
	};
	return (
		<div tabIndex="0" className="App">
			<div className="container px-0 px-md-15">
				<Navbar bg="dark" variant="dark" className="py-0">
					<NavbarBrand className="py-0">Hacker News</NavbarBrand>
				</Navbar>
        <NewsItem item = {item}/>
			</div>
		</div>
	);
}

export default App;
