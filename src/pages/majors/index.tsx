import { setBreadCrumb } from "@/store/slice/app";
import { useDispatch } from "react-redux";

const Majors = () => {
  const dispatch = useDispatch();
  dispatch(
    setBreadCrumb([
      { title: "Home", link: "/" },
      { title: "Majors", link: "/majors" },
    ])
  );

  return <div>Majors</div>;
};

export default Majors;
