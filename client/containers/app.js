import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Page from '../components/page';
import * as pageActions from '../actions/pageActions';

class App extends Component {
    render() {
        const { page } = this.props;
        const { setTitle } = this.props.pageActions;

        return <Page title = { page.title }
        setTitle = { setTitle }
        />
    }
}

function mapStateToProps(state) {
    return {
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
