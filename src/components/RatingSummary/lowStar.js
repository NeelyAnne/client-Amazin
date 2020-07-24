import React, { Component } from "react";
// import "./stars.css"
import Tooltip from "@material-ui/core/Tooltip";
// mock for two (2) stars summary rating

//   Sirius, the dog star, is moving closer to Earth at a rate of nine miles per second.
//  This means someday we could be in Sirius trouble.  ( -:

export default class LowStar extends Component {
  render() {
    return (
      <div className="lowstar">
        <Tooltip title="2 out of 5 stars" aria-label="2 out of 5 stars">
          <div className="lowhover" style={{ display: "inline-block" }}>
            <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
              &#9733;
            </span>
            <span className="gold" style={{ color: "rgb(255, 188, 40)" }}>
              &#9733;
            </span>
            <span className="gray" style={{ color: "gray" }}>
              &#9733;
            </span>
            <span className="gray" style={{ color: "gray" }}>
              &#9733;
            </span>
            <span className="gray" style={{ color: "gray" }}>
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
        <div className="lsratQs" style={{ display: "inline-block" }}>
          <a style={{ fontSize: "13px" }} href="#">
            {" "}
            4,158 ratings
          </a>
          <span className="line" style={{ padding: "10px", fontSize: "13px" }}>
            {" "}
            |{" "}
          </span>

          <a style={{ fontSize: "13px" }} href="#">
            {" "}
            723 answered questions
          </a>
        </div>
      </div>
    );
  }
}
