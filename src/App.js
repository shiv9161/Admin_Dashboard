import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <Sidebar />
          </div>
          <div className="col-sm-10">
            <Navbar />
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
