import React, { Component } from "react";
import Input from "../atoms/Input";
import Note from "../atoms/Note";
import Select from "../atoms/Select";
import classNames from "classnames";

const FieldTypes = {
  date: Input,
  text: Input,
  number: Input,
  checkbox: Input,
  note: Note,
  select: Select,
  "multi select": Select
};

class Section extends Component {
  state = {
    collapse: true
  };

  toggleCollapse = e => {
    e.preventDefault();
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  };

  render() {
    const {
      fields,
      handleValues,
      readOnly,
      index,
      valid,
      formValid
    } = this.props;
    const { collapse } = this.state;
    const { toggleCollapse } = this;
    return (
      <div>
        <div
          className={classNames("stepper-step", {
            error: !valid && !formValid,
            valid: valid && !formValid
          })}
        >
          <div
            className={classNames("col-12", "stepper-header", {
              collapsed: !collapse
            })}
            onClick={toggleCollapse}
          >
            <div className="d-inline-block stepper-number">
              {!valid && !formValid ? (
                <i class="material-icons">error_outline</i>
              ) : valid && !formValid ? (
                <i class="material-icons">check</i>
              ) : (
                index + 1
              )}
            </div>
            <div className="col-9 col-md-11 d-inline-block stepper-title">
              Sección {index + 1} 
            </div>
          </div>
          <div
            className="stepper-content collapse show"
            style={{
              display: collapse === true ? "none" : ""
            }}
          >
            <div>
              {fields.map((field, title) => {
                const Comp = FieldTypes[field.type];
                return (
                  <Comp
                    {...field}
                    key={title}
                    handleValues={handleValues}
                    readOnly={readOnly}
                    formValid={formValid}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
