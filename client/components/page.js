import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired
}