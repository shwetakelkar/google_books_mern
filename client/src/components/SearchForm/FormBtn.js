import React from "react";
import "./Form.css"

export const FormBtn = props => (
  <button {...props} className="btn btn-color float-right">
    {props.children}
  </button>
);
