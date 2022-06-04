import React from "react";
import { TextField } from "@mui/material";
import { Formik, Field, ErrorMessage, Form, FieldArray, FastField } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  commenst: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phone: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values) => {
  console.log("submit", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("invalid email format").required("Email required"),
  channel: Yup.string().required("Required"),
});

const YouTubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <div className="form-control">
          <label htmlFor="commenst">Commenst</label>
          <Field as="textarea" id="commenst" name="commenst" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <FastField id="address" name="address">
            {(props) => {
              console.log("field render");
              const { field, form, meta } = props;
              // console.log(props);
              return (
                <div>
                  <input type="text" id="address" {...field}></input>
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <div className="form-control">
          <label htmlFor="phone1">phone 1</label>
          <Field type="text" id="phone1" name="phone[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="phone2">phone 2</label>
          <Field type="text" id="phone2" name="phone[1]r" />
        </div>

        <div className="form-control">
          <label htmlFor="">phone numbers</label>
          {/* fiel array recibe como children una arrowFunctions donde ecibe un parametro y los mismos de desestructuran */}
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              // console.log("fieldArrayProps", fieldArrayProps);
              // console.log("values", values);
              // console.log("phNumbers", phNumbers);
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          Delete
                        </button>
                      )}
                      <button type="button" onClick={() => push("")}>
                        Adding
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YouTubeForm;
