import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
function Dropdown({ title, arr, set }) {
  Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    arr: PropTypes.array.isRequired,
    set: PropTypes.func.isRequired,
  };

  const {elementMode} = useContext(ThemeContext)
  return (
    <div className={`dropdown ${elementMode}`}>
      <select className={elementMode} onChange={(e) => set(e.target.value)}>
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
