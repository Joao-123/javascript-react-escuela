// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../nav-bar/NavigationBar";
import CommonTable from "./../common/CommonTable";
import Loading from "./../common/Loading"
import i18n from "./../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGet, handleEditNavigate, handleDelete } from "./../handle/HandleManager";
import "./../common/Table.css";

const Table = () => {

  // Declare constant
  const [arrayData, setArrayData] = useState();
  const history = useHistory();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGet("users/", setArrayData);
    }
    return () => { isMounted = false };
  }, []);

  const navigateForm = (row) => {
    history.push({ 
      pathname: "/users-form",
      state: { 
        data: row ,
        edit: true
      }
    })
  }

  if (arrayData === undefined) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{i18n.userTable.tableTitle}</h3>
          </div>
          <div className="card-body card-body-table ">
            <CommonTable 
              tableTitle = {i18n.userTable.tableTitle}
              arrayExcluded = {[
                'edit', 
                'delete',
                'id',
                'email',
                'address',
                'password',
                'creationDate',
                'updateDate',
                'createdBy',
                'updatedBy',
              ]}
              arrayData={arrayData} 
              columns={getTableModel(navigateForm, handleEditNavigate, handleDelete)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
