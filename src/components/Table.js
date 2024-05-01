import React, { useState } from "react";
import { data } from "../data";
import Pagination from "./Pagination";

const TableComponent = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="table-responsive">
      <div className="d-flex align-items-center">
        <h4 className="me-auto">Dashboard</h4>
        <input
          type="text"
          className="form-control mt-2 mb-2 ms-auto"
          placeholder="Search Here..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          style={{ width: "20%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table">
        <thead>
          <tr className="">
            <th
              className="bg-primary text-white"
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              ID
            </th>
            <th className="bg-primary text-white">Customer ID</th>
            <th className="bg-primary text-white">Teacher Name</th>
            <th className="bg-primary text-white">Department</th>
            <th className="bg-primary text-white">Student</th>
            <th className="bg-primary text-white">Status</th>
            <th
              className="bg-primary text-white"
              style={{
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              All Details
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.teacherName.toLocaleLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.id}>
                <td className="pt-3 pb-3">{item.id}</td>
                <td className="pt-3 pb-3">{item.customerId}</td>
                <td className="pt-3 pb-3">{item.teacherName}</td>
                <td className="pt-3 pb-3">{item.department}</td>
                <td className="pt-3 pb-3">{item.student}</td>
                <td className="pt-3 pb-3">{item.status}</td>
                <td>
                  <a href="/" className="">
                    View More
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default TableComponent;
