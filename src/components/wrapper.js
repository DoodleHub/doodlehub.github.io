import PropTypes from "prop-types";

export const Wrapper = ({ children }) => (
  <div className="h-screen bg-home bg-cover">{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.node
};
