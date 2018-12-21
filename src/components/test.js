import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Exploder from 'exploder';
import pic from "./dave.gif"

const Avatar = styled.img`
  position: relative;
  mix-blend-mode: multiply;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

class Test extends Component {

  reloadGif = () => {
    this.setState({loaded: ''})
    setTimeout(() => {
      this.setState({loaded: {pic}})
    }, 0)
  }

  render(){
    <button onClick={this.reloadGif}><Avatar src={pic}/> </button>
  }
