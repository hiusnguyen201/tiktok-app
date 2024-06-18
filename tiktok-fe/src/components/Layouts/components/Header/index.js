import classNames from "classnames/bind";
import styles from "./Header.module.scss";

// Support specified object ( .asd-asda )
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("header-wrapper")}>
        <div>Header</div>
        <div>Header</div>
        <div>Header</div>
      </div>
    </header>
  );
}

export default Header;
