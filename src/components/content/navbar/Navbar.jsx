import React from "react";
import Link from "./Link";
import styles from "./Navbar.module.css";

// При нажатии на компонент, в браузере (строке ввода сайта) добавляется текст, находящейся в to="/..."
// Пример если имя сайта https://mysite.com, то при нажатии на <NavLink to="/profile" activeClassName={style.active}>
// строке поменяется с https://mysite.com на -> https://mysite.com/profile при этом переход на другую страницу НЕ произойдет
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* БЕЗ первого слеша (/) пути работают некорректно! */}
      <Link strict to="/dialogs" />
      <Link to="/music" />
      <Link to="/news" />
      <Link to="/profile" />
      <Link to="/settings" />
      <Link to="/users" />
    </nav>
  );
};

export default Navbar;
