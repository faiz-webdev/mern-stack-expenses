import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

function CheckAuth({ children }) {
  const token = Cookies.get("token");

  const [isLoading, setIsLoading] = useState(false);

  async function fetchUser() {
    setIsLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      headers: { Authorization: "Bearer " + token },
    });

    setIsLoading(false);
    if (!response.ok) {
      redirect("/login");
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if(isLoading){
    return <p>Loading...</p>
  }

  return children;
}

export default CheckAuth;
