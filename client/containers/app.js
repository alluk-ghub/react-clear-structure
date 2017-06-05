import React, { Component } from 'react';
import { connect } from 'react-redux';

import Page from '../components/page';

class App extends Component {

	render() {
		return <Page title={this.props.page.title} />
	}
}

function mapStateToProps (state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App);