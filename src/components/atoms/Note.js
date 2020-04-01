import React from "react";
import classNames from "classnames";

const Note = ({
  fieldIndex,
  title,
  name,
  required,
  readOnly,
  visible,
  valido,
  formValid,
  handleValues = () => console.log("empty function")
}) => {
  if (!visible) return false;
  return (
    <div className="form-group form-group col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 d-inline-block align-top">
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
      <textarea
        className="form-control"
        required={required}
        readOnly={readOnly}
        id={title}
        onChange={handleValues}
        name={name}
        rows={4}
      />
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

export default Note;
