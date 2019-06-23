import styled from "styled-components";

export const CanvasWrapperCss = styled.div`
  background: black;
  height: 500vh;

  canvas {
    position: fixed;
    /* border: 1px solid #ececec; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
