import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';

const Main = styled.main`
  position: relative;
  max-width: 320px;
  margin: 0 auto;
  overflow: hidden;
`;

class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    isLoading: false,
  };

  handleLangChange = isLoading => {
    // To force chatbot a rerender
    this.setState({ isLoading });
  };

  render() {
    const { children } = this.props;
    const { isLoading } = this.state;

    return (
      !isLoading && (
        <div>
          <LanguageSelector onChange={this.handleLangChange} />

          <Main>{children}</Main>
        </div>
      )
    );
  }
}

export default DefaultLayout;
