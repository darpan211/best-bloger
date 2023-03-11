import styles from "@/components/pages-partials/contactUs/index.module.css";
import { firebaseAddCollection } from "@/firebase/utils";
import { Formik } from "formik";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";
import Input from "../../common/inputs/input";
import SelectInput from "../../common/inputs/SelectInput";
import SharedLayout from "../../layout/shared-layout"
const topicDropdownOptions = ['Support', 'Technical', 'Partnerships', 'Creators']

const validationSchema = Yup.object({
  Name: Yup.string().required(),
  Email: Yup.string().email().required(),
  Topic: Yup.string().required(),
  Subject: Yup.string().required(),
  Message: Yup.string().required(),
  Privacy: Yup.boolean().isTrue().required(),
});
function Contactus() {
  return (
    <SharedLayout title="Contact" className="mt-10">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.titleMain}>
            <div className={styles.title}>Contact us </div>
            <div className={styles.innerText}>
              Our dedicated team would love to hear from you!
            </div>
          </div>
          <Formik
            initialValues={{
              Name: "",
              Email: "",
              Topic: "",
              Subject: "",
              Message: "",
              Privacy: false,
              Updates: false
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              await firebaseAddCollection(values)
              resetForm();
            }}
          >
            {({
              errors,
              touched,
              handleSubmit,
              isSubmitting,
              handleChange,
              handleBlur,
              setFieldValue,
              values,
            }) => (
              <form className="mb-24 mt-12 lg:pr-4 px-3" onSubmit={handleSubmit}>
                <div className="mt-4">
                  <label className={styles.label}>Name</label>
                  <Input
                    classes="rounded-xl mt-1.5"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Name}
                    name="Name"
                    placeholder={"Your name "}
                  />
                </div>
                {errors.Name && touched.Name &&
                  <p className="text-red-500 text-sm">{errors.Name}</p>}
                <div className="mt-4">
                  <label className={styles.label}>Email</label>
                  <Input
                    classes="rounded-xl mt-1.5"
                    onChange={handleChange}
                    type='text'
                    onBlur={handleBlur}
                    value={values.Email}
                    name="Email"
                    placeholder={"You@company.com"}
                  />
                </div>
                {errors.Email && touched.Email &&
                  <p className="text-red-500 text-sm">{errors.Email}</p>}
                <div className="mt-4">
                  <label className={styles.label}>Topic</label>
                  <SelectInput
                    classes='mt-1.5'
                    isFullWidth={true}
                    name="Topic"
                    // id="topic"
                    options={topicDropdownOptions}
                    onChange={(val) => setFieldValue("Topic", val.target.value)}
                    value={values.Topic}
                  />
                </div>
                {errors.Topic && touched.Topic &&
                  <p className="text-red-500 text-sm">{errors.Topic}</p>}
                <div className="mt-4 flex flex-col">
                  <label className={styles.label}>Subject</label>
                  <Input
                    classes="rounded-xl mt-1.5"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Subject}
                    name="Subject"
                    placeholder={"Support"}
                  />
                </div>
                {errors.Subject && touched.Subject &&
                  <p className="text-red-500 text-sm">{errors.Subject}</p>}
                <div className="mt-4">
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={styles.textarea}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Message}
                    name="Message"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                {errors.Message && touched.Message &&
                  <p className="text-red-500 text-sm">{errors.Message}</p>}
                <div className="flex gap-2 mt-6 items-center">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Privacy}
                    checked={values.Privacy}
                    name="Privacy"
                    className={`rounded bg-[#1A0E30]  w-4 h-4 border-[#372b4a]  border-1`}
                    type={"checkbox"}
                  />
                  <label className={styles.label}>
                    You agree to us processing your data in line with our
                    <Link target='_blank' href="/privacy" className={styles.mylink}>
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {(errors.Privacy && touched.Privacy && !values?.Privacy) &&
                  <p className="text-red-500 text-sm ml-2.5">Please agree to the privacy policy.</p>}
                <div className="flex gap-2 mt-2 items-center">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Updates}
                    checked={values.Updates}
                    name="Updates"
                    className={`rounded bg-[#1A0E30]  w-4 h-4 border-[#372b4a]  border-1`}
                    type={"checkbox"}
                  />
                  <label className={styles.label}>
                    Contact me with news and updates from oct.
                  </label>
                </div>
                <button disabled={isSubmitting} type="submit" className={styles.btn}>
                  {isSubmitting ? "send..." : "Send"}
                </button>
                <p className="text-base text-white/[0.5] text-center mt-8">For press enquiries please reach out directly to <a className="border-b border-white/[0.5]" href="mailto:press@octopus.com">press@oct.com</a></p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </SharedLayout>
  );
}

export default Contactus;
