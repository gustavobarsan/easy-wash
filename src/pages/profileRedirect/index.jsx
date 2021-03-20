import Header from "../../components/header";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserThunk } from "../../store/modules/currentUser/thunk";

import { useEffect } from "react";

const ProfileRedirect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(getUserThunk());
  const user = useSelector((state) => {
    return state.user;
  });
  const redirect = () => {
    if (user.type === "" && localStorage.getItem("authToken") === "") {
      history.push("/login");
    }
    if (user.type === "PJ") {
      history.push("/profile/company");
    }
    if (user.type === "PF") {
      history.push("/profile/client");
    }
  };
  useEffect(() => {
    redirect();
  }, [user]);
  return <Header />;
};

export default ProfileRedirect;
