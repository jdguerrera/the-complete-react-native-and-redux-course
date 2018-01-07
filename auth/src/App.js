import React, { Component} from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAAM488sgxJNV2uMardCQDjrOrNIEmkh3E',
    		authDomain: 'react-udemy-auth.firebaseapp.com',
    		databaseURL: 'https://react-udemy-auth.firebaseio.com',
    		projectId: 'react-udemy-auth',
    		storageBucket: 'react-udemy-auth.appspot.com',
    		messagingSenderId: '964709135533'
    	});

    	firebase.auth().onAuthStateChanged((user) => {
    		if (user) {
    			this.setState({ loggedIn: true});
    		} else {
    			this.setState({ loggedIn: false});
    		}
    	});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()} title="Log Out">
						Log Out
					</Button>		
				);
			case false:
				return <LoginForm />;
			// TODO: center spinner on screen 
			default:
				return <Spinner size="large" />
		}		
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
