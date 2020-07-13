const React = require("react")

const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="single-modal" id="single-modal" />]);
};

export { onRenderBody };