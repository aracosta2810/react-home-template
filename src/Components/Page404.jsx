import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="text-center">
      <h1 className="display-3 ">
        <b>Error 404.</b>Not found
      </h1>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Page404;
