import React from "react";
import classNames from "classnames";

const Select = ({
  fieldIndex,
  title,
  name,
  required,
  readOnly,
  visible,
  options = [],
  type,
  valido,
  formValid,
  handleValues = () => console.log("empty function")
}) => {
  if (!visible) return false;
  return (
    <div className="field-container form-group col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 d-inline-block align-top">
      {/*<label htmlFor={`field-${fieldIndex}`}>{name}*/}
      <label htmlFor={title}>
        {name}
        <i
          className="material-icons field-info ml-2"
          data-toggle="tooltip"
          title={name}
        >
          info
        </i>
      </label>
      <select
        className="form-control"
        required={required}
        //id={`field-${fieldIndex}`}
        id={title}
        multiple={type === "multi select"}
        disabled={readOnly}
        onChange={handleValues}
        name={name}
      >
        {options.map(option => (
          //<option key={`field-${fieldIndex}-${option}`}>{option}</option>
          <option key={`${title}-${option}`}>{option}</option>
        ))}
      </select>
      <div
        className={classNames("invalid-feedback", {
          "invalid-feedback-show": !valido && !formValid
        })}
      >
        Debe ingresar {name}
      </div>
    </div>
  );
};

export default Select;
