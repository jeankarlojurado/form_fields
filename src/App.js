import React, { Component } from "react";
import "./App.css";
import { formFields } from "./estados-form";
import querystring from "querystring";
import Section from "./components/molecules/Section";

function validFields(data) {
  return field => {
    if (field.required) {
      return {
        ...field,
        valido: field.required && !!data[field.name]
      };
    }
    return { ...field, valido: true };
  };
}

class App extends Component {
  state = {
    fields: [],
    estado: null,
    data: {},
    formValid: true,
    sections: [
      { start: 0, end: 9, valid: true },
      { start: 9, end: 19, valid: true },
      { start: 19, end: 29, valid: true },
      { start: 29, end: 32, valid: true }
    ]
  };

  componentDidMount() {
    const query = querystring.parse(window.location.search.replace("?", ""));
    const { estado = null } = query;
    const { data } = this.state;
    if (estado !== null) {
      const camposValidosFn = validFields({ ...data });
      const fields = [...formFields[estado]].map(camposValidosFn);
      this.setState({
        fields,
        estado
      });
    }
  }

  handleValues = event => {
    const { name = null, value = null } = event.target;
    let { data } = this.state;
    data = { ...data, [name]: value };
    this.setState({ data }, () => {
      this.handleValidation();
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { data, valido, sections, fields } = this.state;

    const newSections = sections.map(({ start, end }) => {
      const sectionInvalidFields = fields
        .slice(start, end)
        .filter(sectionField => !sectionField.valido);
      return { start, end, valid: !sectionInvalidFields.length };
    });
    this.setState({ sections: newSections });
    this.handleValidation(() => {
      if (this.state.formValid === true) {        
        console.log("send data");
      }
    });
  };

  handleValidation = (cb = null) => {
    const { data, fields } = this.state;
    const camposValidosFn = validFields({ ...data });
    const newFields = fields.map(camposValidosFn);
    const noValidFields = newFields.filter(nf => !nf.valido);
    if (typeof cb === "function") {
      this.setState(
        { fields: newFields, formValid: !noValidFields.length },
        cb
      );
      return;
    }
    this.setState({ fields: newFields, formValid: !noValidFields.length });
  };

  render() {
    const { fields = [], estado = null, sections, formValid } = this.state;
    const { handleValues, handleSubmit } = this;
    const readOnly = estado === "soloVista";
    return (
      <div className="App">
        <div>
          <form onSubmit={e => e.preventDefault()}>
            {sections.map(({ start, end, valid }, index) => {
              const sectionFields = fields.slice(start, end);
              return (
                <Section
                  fields={sectionFields}
                  handleValues={handleValues}
                  readOnly={readOnly}
                  index={index}
                  key={`section-${index}`}
                  valid={valid}
                  formValid={formValid}
                />
              );
            })}
            <div className="col-12 mt-5">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn text-white save-btn"
              >
                Guardar
              </button>
              <button
                type="submit"
                className="btn btn-secondary ml-2"
                value="Cancelar"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.href = "/";
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
