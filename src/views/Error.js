import React from "react";
import PropTypes from "prop-types";

import Section from "../components/styled/Section";

const Error = ({ location }) => (
  <Section className="error">
    <h2>Error 404 - Not Found</h2>
    <p>It looks like we hit a snag.</p>
    <pre>{location.pathname}</pre>
  </Section>
);

Error.propTypes = {
  location: PropTypes.any,
};

export default Error;