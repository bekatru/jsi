import React, { useEffect, useState } from "react";
import { LoadData } from "../../utils/fetch";
import Request from "./Request";

const RequestList = () => {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    LoadData("requests/user?id=", id)
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, [id]);

  const requests = data.map((item) => <Request key={item._id} data={item} />);

  return requests;
};

export default RequestList;
