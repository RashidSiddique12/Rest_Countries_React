import PropTypes from "prop-types";
function Dropdown({ title, arr, set }) {
  Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    arr: PropTypes.array.isRequired,
    set: PropTypes.func.isRequired,
  };
  return (
    <div className="dropdown">
      <select onChange={(e) => set(e.target.value)}>
        <option value={`Filter by ${title}`}>{`Filter by ${title}`}</option>
        {arr.map((val) => (
          // eslint-disable-next-line react/jsx-key
          <option value={val}>{val}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
