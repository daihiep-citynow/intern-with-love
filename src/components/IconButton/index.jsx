import styles from "./IconButton.module.scss";

const IconButton = ({ children, onClick = () => {} }) => (
  <div className={styles["icon-button"]} onClick={() => onClick} aria-hidden="true">
    {children}
  </div>
);

export default IconButton;
