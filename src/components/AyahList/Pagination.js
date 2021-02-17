import React from "react";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Pagination = () => {
  return (
    <div>
      <Button startIcon={<ChevronLeftIcon />}>Previous</Button>
      <Button endIcon={<ChevronRightIcon />}>Next</Button>
    </div>
  );
};

export default Pagination;
