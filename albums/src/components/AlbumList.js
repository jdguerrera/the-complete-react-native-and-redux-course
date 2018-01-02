import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	// class level property 
	state = { albums: [] }; // initial or empty state with no albums

	// lifecycle methods
	componentWillMount() {
		//console.log('componentWillMount');
		// this will add breakpoint
		// debugger;

		// set the state to include albums api data
		// props are for parent/child data xfer
		// state is for intra-component data 
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() { 
		// key would normally be a unique identifier
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		); 
	}

	render() {
		console.log(this.state);
		
		// ScrollView makes the list scrollable
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>	
		);
	}
}

export default AlbumList;
