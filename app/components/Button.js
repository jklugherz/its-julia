import React from 'react';


class Button extends React.Component {
  render() {
    return <div className="main">
        <button type="button"
                  onClick={() => {
                      this.props.onClick();
                  }}>
                Click to reveal! </button>
        {console.log(this.props.img)}
        <img src={this.props.img} width="50%" height="50%"></img>
    </div>
  }
}

export default Button;
