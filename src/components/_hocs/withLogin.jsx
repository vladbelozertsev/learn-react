import React from "react";
import { useSelector } from "react-redux";
import { getLogin } from "../../store/init-slice";

const withLogin = (Component) => () => {
  const login = useSelector(getLogin);
  return <Component login={login} />;
};

export default withLogin;
