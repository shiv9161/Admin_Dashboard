import React, { useState } from "react";
import { data } from "../data";

const TableComponent = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="table-responsive">
      <div className="d-flex align-items-center">
        <h4 className="me-auto">Dashboard</h4>
        <input
          type="text"
          className="form-control mt-3 mb-3 ms-auto"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          style={{ width: "20%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Teacher Name</th>
            <th>Department</th>
            <th>Student</th>
            <th>Status</th>
            <th>All Details</th>
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
                <td>{item.id}</td>
                <td>{item.customerId}</td>
                <td>{item.teacherName}</td>
                <td>{item.department}</td>
                <td>{item.student}</td>
                <td>{item.status}</td>
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
      <div class="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="/" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TableComponent;
