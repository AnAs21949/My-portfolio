import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useAlertContext } from "../context/AlertContext";
// import UseSubmit from "../hooks/UseSubmit";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import MyModal from "./MyModal";

export default function ContactMe() {
  const form = useRef();
  // const { response, submit} = UseSubmit();
  // const { onOpen } = useAlertContext();
  const [active, setActive] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_nlbcq6g",
        "template_kojgf3w",
        form.current,
        "x6I1X1zpvUGyHtx92"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: " ",
    },
    onSubmit: (values) => {
      setActive(true);
      formik.resetForm();
      sendEmail(); // Call the sendEmail function to actually send the email
    },

    validationSchema: Yup.object({
      user_name: Yup.string().required("First Name is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(20, " too short min 20 letters")
        .required("Comment is required"),
    }),
  });

  // useEffect(() => {
  //   if (response) {
  //     onOpen(response.type, response.message);
  //     if (response.type === "success") {
  //       formik.resetForm();
  //     }
  //   }
  // }, [response]);

  const handleOnClose = () => setActive(false);

  return (
    <section
      id="contactme-section"
      className="bg-gray-950 p-16 text-white flex justify-center "
    >
      <MyModal onClose={handleOnClose} visible={active} />
      <div className="w-[1024px] flex flex-col items-start  py-20">
        <h1 className="  uppercase font-semibold text-3xl text-blue-700 tracking-wider  mb-4 ">
          Contact me
        </h1>
        <div className="w-full p-6 rounded-md">
          <form
            className="flex flex-col gap-4 items-center justify-center"
            ref={form}
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col w-full">
              <label htmlFor="user_name ">Name</label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.user_name}
                onBlur={formik.handleBlur}
                className={`p-2 mt-2 outline-none bg-transparent ${
                  formik.errors.user_name && formik.touched.user_name
                    ? "border-red-600"
                    : "border-white"
                }
                        border  rounded-md`}
              />
              {formik.errors.user_name && formik.touched.user_name && (
                <span className="text-red-700">{formik.errors.user_name}</span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="user_email">Email Address</label>
              <input
                id="user_email"
                name="user_email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.user_email}
                onBlur={formik.handleBlur}
                className={`p-2 mt-2 outline-none bg-transparent ${
                  formik.errors.user_email && formik.touched.user_email
                    ? "border-red-600"
                    : "border-white"
                }
                        border  rounded-md`}
              />
              {formik.errors.user_email && formik.touched.user_email && (
                <span className="text-red-700">{formik.errors.user_email}</span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
                className={`p-2 mt-2 outline-none bg-transparent ${
                  formik.errors.message && formik.touched.message
                    ? "border-red-600"
                    : "border-white"
                }
                        border  rounded-md`}
                cols="30"
                rows="10"
              ></textarea>
              {formik.errors.message && formik.touched.message && (
                <span className="text-red-700">{formik.errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full border border-white rounded-md py-2 bg-slate-700 hover:bg-slate-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
