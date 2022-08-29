import React, { useState, useMemo } from "react";
import "./UserMain.css";
import Pagination from "../../components/Pagination/Pagination";
import Main from "../Main/main";

let PageSize = 8;

const UserMain = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);
  return (
    <>
      <Main>
        <div className="container">
          <div className="table">
            <div className="table-header">
              <div className="header__item">
                <p className="filter__link">ID</p>
              </div>
              <div className="header__item">
                <p className="filter__link filter__link--number">Name</p>
              </div>
              <div className="header__item">
                <p className="filter__link filter__link--number">Email</p>
              </div>
              {/* <div className="header__item">
              <p className="filter__link filter__link--number">Created At</p>
            </div> */}
              <div className="header__item">
                <p className="filter__link filter__link--number">Status</p>
              </div>
            </div>
            <div className="table-content">
              {currentTableData.map((data) => (
                <div key={data.id} className="table-row">
                  <div className="table-data">{data.id}</div>
                  <div className="table-data">{data.name}</div>
                  <div className="table-data">{data.email}</div>
                  {/* <div className="table-data">{data.submission_date}</div> */}

                  {data.status === "1" ? (
                    <div className="table-data pending">Pending</div>
                  ) : (
                    <div className="table-data aprroved">Approved</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="user-pagination">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </Main>
    </>
  );
};

export default UserMain;
