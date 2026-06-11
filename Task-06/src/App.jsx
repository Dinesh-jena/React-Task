import { useFormik } from "formik";
import { signUpSchema } from "./validation";

const initialValues = {
  date: "",
};

const App = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,

    onSubmit: (values, action) => {
      console.log(values);

      action.resetForm();
    },
  });

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl text-center"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Select Date
        </h1>

        <input
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border-2 border-blue-500 px-5 py-3 rounded-xl outline-none 
          focus:ring-4 focus:ring-blue-300 text-lg cursor-pointer"
        />

        {errors.date && touched.date ? (
          <p className="text-red-500 mt-2">{errors.date}</p>
        ) : null}

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-xl mt-5 hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;