import React from "react";

function Cell() {

    function cellClick(e) {
      e.target.classList.toggle("alive");
    }

    return(
        <div
          className="Cell"
          onClick={cellClick}
        ></div>
    )
}

export default Cell;