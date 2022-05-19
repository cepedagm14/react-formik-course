import React from "react";
import { useFormik } from "formik";


const YouTubeForm = () => {
  const formik = useFormik({

    })
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">email</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
