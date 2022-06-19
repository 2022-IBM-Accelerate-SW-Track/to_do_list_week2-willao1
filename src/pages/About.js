import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/billhead.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Bill Ao</div>
            <div className="brief_description">
              My name is Bill Ao, and I am a rising junior at Princeton 
              University studying Computer Science! I am a huge sports nut 
              (Go Braves!), and I love to play piano, listen to all 
              genres of music, and watch horror movies. I plan on being a 
              software engineer!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
