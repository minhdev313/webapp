import { setBreadCrumb } from "@/store/slice/app";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Lectures = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadCrumb([
        { title: "Home", link: "/" },
        { title: "Accounts", link: "/accounts" },
        { title: "Lectures", link: "/accounts/lectures" },
      ])
    );
  }, [dispatch]);

  return <div>Lecture</div>;
};

export default Lectures;
