import { connect } from "react-redux";

import { setText } from "../../actions/capital";

import Capital from "./Capital";

const mapState = state => ({
  text: state.capital.text,
});

const mapAction = {
  setText,
};

export default connect(mapState, mapAction)(Capital);