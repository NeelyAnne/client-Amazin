import React, { Component } from "react";
// import "./stars.css"
import Tooltip from "@material-ui/core/Tooltip";
// five (5) star mock

export default class HighStar extends Component {
  render() {
    return (
      <div className="highstar">
        <Tooltip
          title="5 out of 5 stars"
          aria-label="5 out of 5 stars"
          placement="bottom"
        >
          <div className="highhover" style={{ display: "inline-block" }}>
            <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
              &#9733;
            </span>
            <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
              &#9733;
            </span>
            <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
              &#9733;
            </span>
            <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
              &#9733;
            </span>
            <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
              &#9733;
            </span>
            <span
              className="tiny"
              style={{
                position: "relative",
                top: "-8px",
                fontSize: "10px",
                padding: "0px 20px 0px 5px",
              }}
            >
              {" "}
              v{" "}
            </span>
          </div>
        </Tooltip>
        <div className="hsratQs" style={{ display: "inline-block" }}>
          <a style={{ fontSize: "13px" }} href="#">
            {" "}
            9,458 ratings
          </a>
          <span className="line" style={{ padding: "10px", fontSize: "13px" }}>
            {" "}
            |{" "}
          </span>

          <a style={{ fontSize: "13px" }} href="#">
            {" "}
            167 answered questions
          </a>
        </div>
      </div>
    );
  }
}

// Q: What does the second best star win in a competition?
// A: A constellation prize!
