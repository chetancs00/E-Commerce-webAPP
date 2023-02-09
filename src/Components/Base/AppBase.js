import React from "react";
import AppFooter from "./AppFooter/AppFooter";
import AppHeader from "./AppHeader";

const AppBase = (props) => {
  return (
    <>
      <div  >
        <AppHeader />
      </div>
      <div style={{marginTop : "95px"}} >
        {props.children}
      </div>
      {/* <div>
        <AppFooter />
      </div> */}
    </>
  );
};

export default AppBase;
