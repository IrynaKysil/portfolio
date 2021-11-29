import React from "react";

const year = new Date().getFullYear();
const Footer = () => {
  return(
    <div class="footer">
      Copyright © {year} Iryna Kysil
    </div>
  )
}

export default Footer;