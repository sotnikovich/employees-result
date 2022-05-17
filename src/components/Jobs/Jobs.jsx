import React, { useEffect } from "react";
import { JOBS } from "../../modules/api/endpoints";
import useFetch from "../../hooks/useFetch";
import Navigation from "../common/Navigation";

export default function Jobs() {
  const { response, performFetch } = useFetch(JOBS);
  const { loading, data } = response;

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return <Navigation loading={loading} services={data} title={"Employees"} />;
}
