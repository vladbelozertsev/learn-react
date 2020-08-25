import PT from "prop-types";
import React from "react";
import Page from "./Page";

const Pages = (props) => {
  const { pageSize, usersSumm, pageActive } = props;
  const totalPages = Math.ceil(usersSumm / pageSize);
  // https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
  const pagesSumm = Array.apply(null, Array(totalPages)).map((_, i) => (i = i + 1));

  return (
    <div>
      {pagesSumm.map((val) => {
        const pageProps = { val, pageSize, pageActive };
        return <Page key={val} {...pageProps} />;
      })}
    </div>
  );
};

Pages.propTypes = {
  pageSize: PT.number.isRequired,
  usersSumm: PT.number.isRequired,
  pageActive: PT.number.isRequired,
};

export default Pages;
