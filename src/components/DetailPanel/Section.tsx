import React from "react";

const Section = ({ gid, ...features }) => {
  return (
    <React.Fragment>
      <h1>Abschnitt {gid}</h1>
      <pre>{JSON.stringify(features, null, 2)}</pre>
    </React.Fragment>
  );
};

export default Section;
