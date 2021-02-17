import React from "react";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Pagination = () => {
  const search = window.location.search;
  let offset = 0;
  if (search.length) {
    offset = parseInt(search.replace("?offset=", ""));
  }

  const goToNextPage = () => {
    const startFrom = offset + 30;
    window.location = window.location.origin + "/?offset=" + startFrom;
  };

  const goToPrevPage = () => {
    const startFrom = offset - 30;
    window.location = window.location.origin + "/?offset=" + startFrom;
  };

  return (
    <div>
      {offset > 0 && (
        <Button onClick={goToPrevPage} startIcon={<ChevronLeftIcon />}>
          Previous
        </Button>
      )}
      <Button onClick={goToNextPage} endIcon={<ChevronRightIcon />}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
