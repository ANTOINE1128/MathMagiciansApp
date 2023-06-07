import PropTypes from 'prop-types';

const Screen = ({ display  }) => (
  <div className="screen">
    <span className="screen-text">{display}</span>
  </div>

);
Screen.propTypes = {
  display: PropTypes.func.isRequired,
};
export default Screen;
