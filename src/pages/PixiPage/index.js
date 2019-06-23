import React from "react";
import * as PIXI from "pixi.js";
import glasses1 from "./images/img1.png";
import { CanvasWrapper } from "./index.css";
import updateOnScroll from "uos";

class PixiPage extends React.Component {
  constructor(props) {
    super(props);

    this.app = null;
    this.images = [];
  }

  componentDidMount() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: "0x004400"
    });
    const canvasWrapper = document.getElementById("canvas-wrapper");
    console.log(canvasWrapper);
    canvasWrapper.appendChild(this.app.view);

    let img = new PIXI.Sprite.from(glasses1);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    this.app.stage.addChild(img);

    updateOnScroll(0, 1, p => this.handleChangeImage(p));

    this.initImages();
  }

  initImages = () => {
    for (let i = 1; i <= 80; i++) {
      let index = i;
      if (index < 10) {
        index = `0${index}`;
      }
      // const newImage = new Image();
      // newImage.setAttribute(
      //   "src",
      //   `https://chanappr.sirv.com/Bryant-dental/explode-animation/final-animation/BryantDental_glasses_exploded_000${index}.png?q=30&w=700`
      // );

      const e = document.createElement("link");
      e.href = `https://chanappr.sirv.com/Bryant-dental/explode-animation/final-animation/BryantDental_glasses_exploded_000${index}.png?q=30&w=700`;
      e.rel = "preload";
      e.as = "image";
      document.head && document.head.appendChild(e);

      this.images.push(e);
    }
  };

  handleChangeImage = position => {
    const index = (position * 100) % 70;

    let img = new PIXI.Sprite.from(this.images[index.toFixed(0)].href);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    this.app.stage.removeChildren();
    this.app.stage.addChild(img);
  };

  render() {
    return <CanvasWrapper id="canvas-wrapper" />;
  }
}

export default PixiPage;
