import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
import css from "./Form.module.css";

const BookingForm = () => {
  // Валідація форми
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required").nullable(),
    message: Yup.string().min(10, "Message must be at least 10 characters"),
  });

  // Початкові значення
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    message: "",
  };

  // Обробка відправки форми
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm(); // Очистити форму після відправки
    toast.success("Your booking request has been successfully submitted!"); // Show success toast
  };

  return (
    <div className={css.container}>
      <p className={css.book}>Book your campervan now</p>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className={css.inputContainer}>
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={css.input}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={css.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>
              <div>
                <DatePicker
                  selected={values.bookingDate}
                  onChange={(date) => setFieldValue("bookingDate", date)}
                  placeholderText="Booking date*"
                  className={css.input}
                />
                <ErrorMessage
                  name="bookingDate"
                  component="div"
                  className={css.error}
                />
              </div>
            </div>
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Comment"
                className={css.textarea}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.buttonContainer}>
              <button className={css.button} type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer /> {/* Render ToastContainer */}
    </div>
  );
};

export default BookingForm;
