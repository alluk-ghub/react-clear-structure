import React, { PropTypes, Component } from 'react';

export default class Page extends Component {

	onChangeTitleClick(e) {
		this.props.setTitle(e.target.dataset.title);
	}
    render() {
        return <div>
        <h1>{this.props.title}</h1>
        <p>
        <button onClick={::this.onChangeTitleClick} data-title='Title 1'>Title 1</button>
        <button onClick={::this.onChangeTitleClick} data-title='Title 2'>Title 2</button>
        </p>
        </div>
    }
}

    Page.propTypes = {
        title: PropTypes.string.isRequired,
        setTitle: PropTypes.func.isRequired
    }
