import React from "react";
import { CanvasWrapperCss } from "./index.css";
import Canvas from "./Canvas";

class CanvasPage extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    // get canvas element
    const canvas = this.canvas.current;

    // create configuration
    const canvas_config = {
      // CANVAS //
      ctx: canvas.getContext("2d"), // canvas 2d context
      canvas_element: canvas,
      height: 567,
      width: 264,

      // IMAGE //
      urlRoot:
        "https://cdn.opstatics.com/store/20170907/assets/images/events/2019/04/18821/highlight/phones/phone",
      count: 101,
      images: [],
      length: 0,
      ext: ".jpg",
      curFrame: 0,
      loading: false
    };

    window.myObject = {};
    window.myObject.canvas = new Canvas();
    window.myObject.canvas.init(canvas_config);
  }

  render() {
    return (
      <CanvasWrapperCss>
        <canvas ref={this.canvas}>
          Fall back if the canvas is no working
        </canvas>
      </CanvasWrapperCss>
    );
  }
}

export default CanvasPage;
