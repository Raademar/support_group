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
                    width="95vw"
                    height="80vh"
                    top="12.5vh"
                    left="2vw"
                    zIndex="4"
                    backgroundColor="white"
                    position="fixed"
                    closePopup={this.togglePopup.bind(this)}
                />
                ) : null}

            </div>
    );
  }
};

export default ActivitiesPopup;
