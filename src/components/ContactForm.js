import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik"
import * as Yup from "yup"
import { TextField, Button, CircularProgress } from "@mui/material";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(20).required("Required"),
  email: Yup.string()
    .email("Invalid Email.")
    .required("Required"),
  message: Yup.string().min(2).max(100).required('Required')
});

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const { handleSubmit, handleChange, values, errors, touched, resetForm } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      setSubmitting(true)
      emailjs.send(process.env.REACT_APP_PUBLIC_SERVICE_ID, process.env.REACT_APP_PUBLIC_TEMPLATE_ID, values, process.env.REACT_APP_PUBLIC_USER_ID)
        .then(() => {
          setSubmitting(false)
          resetForm()
        })
    },
    validateOnChange: useFormik.touched?.length === 0 ? false : true
  })

  return (
    <div className="w-full xl:w-3/5 lg:w-1/2 sm:w-full">
      <form className="bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg rounded px-8 pt-6 pb-8 my-4" onSubmit={handleSubmit}>
        <TextField
          sx={{ marginBottom: '10px' }}
          label={'Name'}
          fullWidth
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={values.name}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          sx={{ marginBottom: '10px' }}
          label={'EMail'}
          fullWidth
          variant="outlined"
          name="email"
          onChange={handleChange}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          sx={{ marginBottom: '10px' }}
          label={'Message'}
          fullWidth
          variant="outlined"
          name="message"
          onChange={handleChange}
          value={values.message}
          error={touched.message && Boolean(errors.message)}
          helperText={touched.message && errors.message}
        />
        <Button sx={{color: "white", width: 100}} type='submit'
                    className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-4 mt-4 mb-2 mx-auto">
          {submitting ? <CircularProgress size={20} /> : 'Submit'}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm