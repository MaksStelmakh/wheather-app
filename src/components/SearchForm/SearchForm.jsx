import { useFormik } from "formik";
import * as Yup from "yup";
import { InputContainer } from "./SearchForm.styled";
import { ImSearch } from "react-icons/im";

const SearchForm = ({ setPlace }) => {
  const formSchema = Yup.object().shape({
    city: Yup.string()
      .min(3, "City must be at least 3 characters")
      .max(20, "City must be at most 20 characters")
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
        <InputContainer>
          <input
            type="text"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            placeholder="Enter your city"
            id="city"
          />
          <label htmlFor="city">Enter your city</label>
          {formik.touched.city && formik.errors.city && (
            <div>
              <p>{formik.errors.city}</p>
            </div>
          )}
          <button type="submit">
            <ImSearch size={20} />
          </button>
        </InputContainer>
      </form>
    </>
  );
};

export default SearchForm;
