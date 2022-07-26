import { useFormik } from "formik";
import * as Yup from "yup";

const SearchForm = ({ setPlace }) => {
  const formSchema = Yup.object().shape({
    city: Yup.string()
      .min(3)
      .max(20)
      .matches(
        "^[A-Za-zА-Яа-яЁёІіЇїЄє. -]+$",
        "The name of the city must contain only letters"
      ),
  });

  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      setPlace(formik.values.city);
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          placeholder="Enter your city"
        />
        {formik.touched.city && formik.errors.city && (
          <div>
            <p>{formik.errors.city}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SearchForm;
