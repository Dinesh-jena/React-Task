import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "./schema";

const initialValues = {
  startDate: "",
  endDate: "",
};

const App = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  let message = "";

  if (values.startDate && values.endDate) {
    const start = new Date(values.startDate);
    const end = new Date(values.endDate);

    if (start.getTime() === end.getTime()) {
      message = "Same Day";
    } 
    
    else if (start < end) {
      const diffTime = end - start;

      const diffDays =
        diffTime / (1000 * 60 * 60 * 24);

      message = `Difference: ${diffDays} days`;
    }
  }

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="border p-5 rounded w-96"
      >
        <h1 className="text-2xl font-bold mb-5">
          Date Difference
        </h1>

        <div className="mb-4">
          <label>Start Date</label>

          <input
            type="date"
            name="startDate"
            value={values.startDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border w-full p-2 mt-1"
          />

          {touched.startDate &&
            errors.startDate && (
              <p className="text-red-500 text-sm">
                {errors.startDate}
              </p>
            )}
        </div>


        <div className="mb-4">
          <label>End Date</label>

          <input
            type="date"
            name="endDate"
            value={values.endDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border w-full p-2 mt-1"
          />

          {touched.endDate &&
            errors.endDate && (
              <p className="text-red-500 text-sm">
                {errors.endDate}
              </p>
            )}
        </div>

     
        {values.startDate &&
          values.endDate && (
            <div className="mb-4 border p-3">
              <p>
                Start Date:{" "}
                {values.startDate}
              </p>

              <p>
                End Date:{" "}
                {values.endDate}
              </p>

              <p className="font-bold mt-2">
                {message}
              </p>
            </div>
          )}

        <button
          type="submit"
          className="bg-black text-white px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;