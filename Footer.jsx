import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <header>
      <p>Copyright @ {currYear}</p>
    </header>
  );
}
export default Footer;
