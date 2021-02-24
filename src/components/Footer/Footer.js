import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#d2d2d2",
      }}
    >
      <Toolbar>
        <Typography>
          CopyRights &copy; OctaByte.
          <a href="https://github.com/octabytes/quran-frontend" target="_blank">
            Code on GitHub
          </a>
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Footer;
