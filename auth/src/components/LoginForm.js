import React, { Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	// the text input text needs to be done with way with state to access
	state = { 
		email: '',
		password: '',
		error: '',
		loading: false
	};

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({error: '', loading: true});

		// attempt to signin
		firebase.auth().signInWithEmailAndPassword(email, password)
			// TODO: look into this bind function
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				// if signin fails, attempt to signup
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this)
				);
			});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication failed',
			loading: false
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>	
		);
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input 
						placeholder="user@email.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;