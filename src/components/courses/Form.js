// React
import React, { useState } from "react";
// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import useInput from "./../hooks/UseInput";
import FormInput from "./../common/FormInput";
import i18n from "./../../i18n/i18n";
import handleValidations from "./HandleValidations";
import { handleCreate, handleEdit } from "./../handle/HandleManager";

const Form = (props) => {

  const colorFormReset = {
    name: ""
  }

  const [isEdit, setIsEdit] = useState(props.location.state);
  const [colorFormText, setColorFormText] = useState(colorFormReset);

  let id = isEdit ? isEdit.data.id : "";
  let name = isEdit ? isEdit.data.name : "";

  const { value: valueName, bind: bindName, reset: resetName } = useInput(name);

  const handleReset = () => {
    resetName();
  }
  const handleAdd = () => {
    const username = window.localStorage.getItem("username");
    let body = {
      name: valueName,
      createdBy: username,
      updatedBy: username,
    }
    console.log(colorFormText);
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      if(isEdit) {
        handleEdit("courses/", body, id, handleReset, setIsEdit)
      } else {
        handleCreate("courses/", body, handleReset);
      }
    }
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-4">
        <div className="card">
          <div className="card-header">
            <h3 align="center">{i18n.courseForm.formTitle}</h3>
          </div>
          <div className="card-body">
            <form className="">
              <FormInput
                labelContent={i18n.courseForm.formLabelName} 
                formText={i18n.courseForm.formTextName}
                color={colorFormText.name}
                minLength="3"
                maxLength="120"
                bind={bindName}
              ></FormInput>
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={handleAdd}
                  type="button" >
                  {i18n.common.ButtonRegistration}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
