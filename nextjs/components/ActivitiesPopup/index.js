import Link from "next/link";
import styled from "styled-components";
import Button from "../Button";
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
                <li>{`${this.props.item.title.rendered}`}</li>
                </div>
                <button
                onClick={() => {
                    alert("woooooooot?");
                }}
                >
                </button>

                {this.state.showPopup ? 
                (<h1>HEJ</h1>
                ) : null}
            </div>
    );
  }
};

export default ActivitiesPopup;
