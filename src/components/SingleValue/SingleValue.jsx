import { components } from "react-select";

const SingleValue = ({ data, ...props }) => {
  return (
    <components.SingleValue {...props}>
      To&nbsp;${data.label}
    </components.SingleValue>
  );
};

export default SingleValue;
