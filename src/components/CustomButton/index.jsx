// libraries
import classnames from "classnames";
// another
import styles from "./CustomButton.module.scss";

const CustomButton = ({ buttonType, title }) => (
  <div className={classnames(styles[`button-${buttonType}`], styles["custom-button"])}>{title}</div>
);

export default CustomButton;
