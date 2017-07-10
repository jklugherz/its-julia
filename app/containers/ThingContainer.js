import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Thing from '../components/Thing';
import img from 'file-loader!../img/DSC_7856.NEF.jpeg'


class ThingContainer extends React.Component {

  render() {
    return (
      <div>
        <Thing onClick={(input) => this.onClick(input)}/>
      </div>
    )
  }
};

ThingContainer.PropTypes = {
  photo: PropTypes.string,
  onClick: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        photo: state.appState.photo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (photo) => dispatch({type: 'THING_CLICK', photo})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThingContainer);
