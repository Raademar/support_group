import Link from "next/link";
import styled from "styled-components";
import Button from "../Button";
import ActivitiesPopupBox from "../ActivitiesPopupBox";
import React, { Component } from "react";


class ActivitiesPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    //   console.log(this.props)
    return (
            <div>
                <div>
                <button onClick={this.togglePopup}>
                    <img src={`${this.props.item.acf.image.sizes.thumbnail}`} />
                </button>
                <li key={`${this.index}`}>{`${this.props.item.title.rendered}`}</li>
                </div>

                {this.state.showPopup ? 
          (     <ActivitiesPopupBox 
                    item={this.props.item}
                    width="97vw"
                    height="97vh"
                    top="4.5vh"
                    left="4.5vw"
                    zIndex="4"
                    backgroundColor="blue"
                    position="fixed"
                />
                ) : null}
            </div>
    );
  }
};

export default ActivitiesPopup;
