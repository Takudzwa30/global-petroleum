import React from "react";

import Style from "./ContactUs.module.css";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import people from "../../assets/images/peopleSitting.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";

const ContactUs = () => {
  return (
    <>
      <img src={people} alt="meeting" className={Style.meeting} />
      <SectionWrapper>
        <SectionTitle title="Contact Us" />
        <div className={Style.formGrid}>
          <h5>
            Whether you’re seeking consultation on petroleum products, our team
            of experts is ready to assist. Reach out to us today and let’s
            explore how we can work together to power your business forward.
          </h5>
          <FormSection />
        </div>
      </SectionWrapper>
    </>
  );
};

const FormSection = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div>
      <h1>Contact Form</h1>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className={Style.form}>
              <div>
                <Field
                  type="text"
                  name="name"
                  className={
                    touched.name && errors.name ? Style.error : Style.field
                  }
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: "red", fontSize: "13px" }}
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  className={
                    touched.email && errors.email ? Style.error : Style.field
                  }
                  placeholder="Email Address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red", fontSize: "13px" }}
                />
              </div>

              <div>
                <Field
                  type="text"
                  name="phone"
                  className={
                    touched.phone && errors.phone ? Style.error : Style.field
                  }
                  placeholder="Phone Number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  style={{ color: "red", fontSize: "13px" }}
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  className={
                    touched.message && errors.message
                      ? Style.error
                      : Style.field
                  }
                  placeholder="Message"
                  rows={"5"}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  style={{ color: "red", fontSize: "13px" }}
                />
              </div>
            </div>
            <div className={Style.btnWrapper}>
              <Button>Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
