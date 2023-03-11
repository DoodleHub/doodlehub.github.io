import PropTypes from "prop-types";

export const Wrapper = ({ children }) => (
  <div className="min-h-screen bg-black bg-opacity-40 bg-home bg-cover bg-blend-darken">
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node
};
