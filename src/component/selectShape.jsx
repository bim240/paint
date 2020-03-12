import React from "react";
import ReactDOM from "react-dom";

const SelectShape = props => {
  return (
    <div className="select_shape_bigcontainer">
      <div className="select_shape_smallcontainer">
        <div className="shape">
          <button onClick={() => props.updateShape("selection")}>
            {" "}
            <svg viewBox="0 0 320 512">
              <path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"></path>
            </svg>
          </button>
        </div>
        <div className="shape">
          <button onClick={() => props.updateShape("rectangle")}>
            {" "}
            <svg viewBox="0 0 448 512">
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </button>
        </div>
        <div className="shape">
          <button onClick={() => props.updateShape("rectangle")}>
            {" "}
            <svg viewBox="0 0 223.646 223.646">
              <path d="M111.823 0L16.622 111.823 111.823 223.646 207.025 111.823z"></path>
            </svg>
          </button>
        </div>
        <div className="shape">
          <button onClick={() => props.updateShape("ellipse")}>
            {" "}
            <svg viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
            </svg>
          </button>
        </div>
        <div className="shape">
          <button onClick={() => props.updateShape("arrow")}>
            {" "}
            <svg viewBox="0 0 448 512">
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SelectShape;
