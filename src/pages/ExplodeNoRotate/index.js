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
      // width: 1920,
      // height: 1080,
      width: 1080,
      height: 607,

      // IMAGE //
      urlRoot:
        "https://chanappr.sirv.com/Bryant-dental/2019-clay/expliode-clay-norotate/bryantDental_exploded_stand_clay_00",
      count: 50,
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
        <canvas ref={this.canvas}>Fall back if the canvas is no working</canvas>
      </CanvasWrapperCss>
    );
  }
}

export default CanvasPage;
