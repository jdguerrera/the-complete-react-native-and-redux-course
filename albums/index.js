// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'; // just access to Text from react-native library
// need to specify full path for user-defined libaries/modules
import Header from './src/components/Header'; 
import AlbumList from './src/components/AlbumList';

// Create a component (object/function that can be rendered to screen)
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

// Render component to the screen (must register at least one component)
AppRegistry.registerComponent('albums', () => App);
