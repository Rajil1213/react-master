import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props: React.PropsWithChildren) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
