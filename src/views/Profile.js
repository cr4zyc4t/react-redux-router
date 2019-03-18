import React from "react";
import PropTypes from "prop-types";

import Section from "../components/styled/Section";

const Profile = ({ user, ...props }) => (
  <Section className="profile">
    <h2>Profile: {props.match.params.user || "you"}</h2>
    <p>This is some text about {user || "you"}.</p>
    <pre>{JSON.stringify({ user, ...props }, 0, "  ")}</pre>
  </Section>
);

Profile.propTypes = {
  user: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};

export default Profile;