import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';


class ButtonContainer extends React.Component {

  render() {
    return (
      <div>
        <Button onClick={() => this.props.onClick()} img={this.props.img}/>
      </div>
    )
  }
};

ButtonContainer.PropTypes = {
  img: PropTypes.string,
  onClick: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        img: state.appState.img
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch({type: 'BUTTON_CLICK'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonContainer);
