import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
	  	const config = {
		    apiKey: "AIzaSyA2L-s1jTOLmvX68ctkv-J9RVYv74YrIak",
		    authDomain: "react-udemy-manager.firebaseapp.com",
		    databaseURL: "https://react-udemy-manager.firebaseio.com",
		    projectId: "react-udemy-manager",
		    storageBucket: "",
		    messagingSenderId: "999089789637"
	  	};

  		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;