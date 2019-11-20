import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { homeTitle } from '../../util/constants';

const Home = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const mapStateToProps = (/* state */) => {
  // map items from state into local props
  return {
    title: homeTitle,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default compose(
  // add HOC functions
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
