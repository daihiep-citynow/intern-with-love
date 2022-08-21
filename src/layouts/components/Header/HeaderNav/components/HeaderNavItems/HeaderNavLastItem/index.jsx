// libraries
import { Popover } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import classnames from "classnames";
// components
import { HeaderSubNavLanguage } from "../../HeaderSubNav";
// another
import styles from "./HeaderNavLastItem.module.scss";

const HeaderNavLastItem = () => (
  <Popover content={HeaderSubNavLanguage} placement="bottom">
    <li className={classnames(styles["header-nav-item"], styles["header-nav-language"])}>
      <MoreOutlined />
    </li>
  </Popover>
);

export default HeaderNavLastItem;
