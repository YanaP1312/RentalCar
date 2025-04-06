import { components } from "react-select";

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="16"
        height="16"
        style={{
          transition: "transform 0.3s ease",
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        <use href="/sprite.svg#icon-arrow-down" />
      </svg>
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
