import PropTypes from "prop-types";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useSpring, animated } from "@react-spring/web";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  className,
  children,
  visible,
  offset = [12, 12],
  items = [],
  hideOnClick = false,
  delay = [0, 700],
  onChange = defaultFn,
  placement = "bottom-end",
  animation = true,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  // Animate
  const config = { tension: 300, friction: 15 };
  const initialStyles = { opacity: 0 };
  const [props, setSpring] = useSpring(() => initialStyles);

  //Directly calling start instead of using the api object is deprecated in v9
  //(use ".start" instead), this will be removed in later 0.X.0 versions
  function onMount() {
    setSpring.start({
      opacity: 1,
      onRest: () => {},
      config: {
        ...config,
        duration: 0,
      },
    });
  }

  function onHide({ unmount }) {
    handleResetToFirstMenu();
    setSpring.start({
      ...initialStyles,
      onRest: unmount,
      config: {
        ...config,
        clamp: true,
        duration: 200,
      },
    });
  }

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          className={cx(current.level > 1 && "menu-children")}
          key={index}
          data={item}
          onClick={(e) => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item, setHistory);
            }
          }}
        />
      );
    });
  };

  const handleResetToBackMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const handleResetToFirstMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const renderResult = (attrs) => {
    return (
      <animated.div
        className={cx("menu-list", className)}
        {...attrs}
        style={props}
      >
        <PopperWrapper className={cx("menu-popper")}>
          {history.length > 1 && current.title && (
            <Header title={current.title} onBack={handleResetToBackMenu} />
          )}
          <div className={cx("menu-body")}>{renderItems()}</div>
        </PopperWrapper>
      </animated.div>
    );
  };

  return (
    <Tippy
      animation={animation}
      interactive={true}
      visible={visible}
      offset={offset}
      delay={delay}
      hideOnClick={hideOnClick}
      placement={placement}
      render={renderResult}
      onMount={onMount}
      onHide={onHide}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
