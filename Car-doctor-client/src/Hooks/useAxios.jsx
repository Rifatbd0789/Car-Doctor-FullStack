import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("from interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => alert(`logout Successfully !`))
            .catch((error) => console.log(error));
          navigate("/login");
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxios;
