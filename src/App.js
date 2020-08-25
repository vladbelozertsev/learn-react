import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Spinner from "./components/_common/Spinner";
import { aboutMe, getIsInit } from "./store/init-slice";

const App = () => {
  // console.log("App");
  // Перерисовка происходит 2а раза (1-ый при получении, 2-ой при изменении)
  // при этом перерисовка происходит после инициализации переменной, т.е.
  // console.log(isInit) после isInit не будет undefined
  const isInit = useSelector(getIsInit);

  // dispatch мемоизируется по умолчанию (пригоден для использования в useEffect)
  const dispatch = useDispatch();

  // useEffect вызывает перерендер, даже при вызове пустого коллбека
  useEffect(() => {
    dispatch(aboutMe(true));
  }, [dispatch]);

  if (!isInit) {
    return (
      <div className={styles["app"]}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles["app"]}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
