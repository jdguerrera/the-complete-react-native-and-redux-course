import React, { Component } from 'react';
import { 
	Text, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { titleStyle } = styles
		const { id, title } = this.props.library;


		return (
			<TouchableWithoutFeedback 
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

// to consume state from redux, map state to props
// own props is same as this.props inside mapStateToProps
const mapStateToProps = (state, ownProps) => {
	//is the library id the same as the selected id from the reducer?
	const expanded = state.selectedLibraryId == ownProps.library.id;
	return { expanded };
};

// first argument is for mapStateToProps, pass null
// second argument is action creators and passes to component as props
export default connect(mapStateToProps, actions)(ListItem);