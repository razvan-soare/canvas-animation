import updateOnScroll from "uos";
import _ from "lodash";

// Represents the canvas itself and provides functions for setup and drawing etc
const Canvas = function() {
  this.init = config => {
    // remember options and dimensions
    this.config = config;
    this.setDimensions();

    this.initFirstFrame();
    this.loadImages();
    updateOnScroll(0, 1, this.draw);
    updateOnScroll(0.7, 1, this.lift);

    window.addEventListener(
      "resize",
      _.throttle(() => {
        this.setDimensions();
      })
    );
  };

  this.lift = position => {
    const { canvas_element } = this.config;

    canvas_element.style.top = `calc(50% - ${position * 100}%)`;
  }

  this.initFirstFrame = () => {
    const { ext, urlRoot, width, height } = this.config;
    // Load first frame
    const image = new Image();
    image.src = urlRoot + "0" + ext;
    // Object(u.a)(this.container) && this.container.appendChild(t),
    this.config.images[0] = image;
    this.config.length += 1;
    this.config.curFrame = 1;

    image.onload = () => {
      this.config.ctx.drawImage(image, 0, 0, width, height);
    };
  };

  this.loadImages = () => {
    for (let i = 1; i < this.config.count; i += 1) {
      const image = new Image();
      image.onload = () => {
        setTimeout(() => {
          this.config.length += 1;
          this.config.images[i] = image;
        }, 0);
      };
      image.onerror = () => {
        console.log("error");
        this.config.length += 1;
      };

      image.src = this.config.urlRoot + i + this.config.ext;
    }
  };

  this.setDimensions = () => {
    const width = this.config.width;
    const height = this.config.height;

    this.config.canvas_element.setAttribute("width", width);
    this.config.canvas_element.setAttribute("height", height);
  };

  this.draw = position => {
    const { images, width, height, count, length } = this.config;
    if (count !== length) return;
    const index = (position * 100).toFixed(0);
    this.config.ctx.drawImage(images[index], 0, 0, width, height);
  };
};

// Canvas.prototype.init = function(config) {
//   // remember options and dimensions
//   this.config = config;

//   updateOnScroll(0, 100, this.draw);
// };

// Canvas.proptype.draw = function(position) {
//   console.log(position);
// };

export default Canvas;
