import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError() as {
    status: number;
    data: { message: "" };
  };
  const status = error.status;

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (status === 500) {
    message = error.data.message;
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
