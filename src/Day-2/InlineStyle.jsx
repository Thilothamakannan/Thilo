import React from "react";

const Style = () => {
  return (
    <div
      style={{
        backgroundColor: "lightBlue",
        padding: "10px",
        border: "1px solid blue",
        borderRadius: "5px",
      }}
    >
      <h1 style={{ color: "green" }}>
        <center>"Inline Style in JSX Example"</center>
      </h1>
      <p
        style={{
          color: "darkblue",
          fontsize: "16px",
        }}
      >
        "Inline styles look and operate much like CSS, with a few differences.
        Inline styles directly affect the tag they are written in, without the
        use of selectors. Here’s a basic HTML page using inline styles.HTML is
        meant for conveying structured information. CSS is built to style that
        structured information. When inline styles are used, this clear
        separation between structured information and styling is blurred. By
        separating the CSS from the HTML, the markup can be semantic, which
        means that it can convey as much meaning as possible without being
        muddled by visual effects."
      </p>
    </div>
  );
};
export default Style;
