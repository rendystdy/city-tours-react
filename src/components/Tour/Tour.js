import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, img, city, name, info } = this.props.tour;
    const { removeTour } = this.props;
   //  console.log(this.props);
    
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            // console.log(id);
            
            }}
          >
            x
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info <span onClick={this.handleInfo}>toggle</span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
