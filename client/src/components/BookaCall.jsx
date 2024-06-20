import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import {useFormik} from 'formik'; 
import * as Yup from "Yup";
import "./bookaCall.css";

export const BookaCall = React.forwardRef((props, ref) => {
    const [formSubmit, setFormSubmit] = useState(false)
    const [formError, setFormError] = useState(false)
    
    const formik = useFormik({
        initialValues: {
            name:"",
            contactNO:"",
            email:""     
        },
        validationSchema:Yup.object({
            name:Yup.string().required("This is Required"),
            contactNO:Yup.number().typeError("must be a number").min(9, "must be at least 9 digits long").required("This is Required"),
            email:Yup.string().email("Please Provide valid email").required("This is Required")
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log("Form submitted ", values);
            setFormSubmit(true);
            const res = await fetch(`${window.location.origin}/api/auth/bookacall`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({values})
            });

            if (res.ok) {
                setFormSubmit(true);
                setFormError(false);
                resetForm();
            } else {
                alert('789');
                console.error("Failed to submit form");
                setFormSubmit(false);
                setFormError(true);
            }
        }
    });

  return (
    <div ref={ref} className="bookaCall">
        <div className="bookaCallLft">
            <img src="./images/callImg.png" alt="" />
        </div>
        <div className="bookaCallRgt">
            <h2>Book a <span>call</span></h2>
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
            <p className="m-50">Lorem ipsum dolor sit amet.</p>
            {
                formSubmit === false ? (
                    <div className="bookcall-form">
                        <Box component="form" onSubmit={formik.handleSubmit}>
                            <TextField 
                                id="outlined-basic" 
                                label="Name" 
                                variant="outlined"
                                name="name"
                                value={formik.values.name} 
                                onChange={formik.handleChange}
                                error={ formik.touched.name && Boolean(formik.errors.name)}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Contact number" 
                                variant="outlined" 
                                name="contactNO"
                                value={formik.values.contactNO} 
                                onChange={formik.handleChange}
                                error={formik.touched.contactNO && Boolean(formik.errors.contactNO)}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.contactNO && formik.errors.contactNO}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="E-mail" 
                                variant="outlined" 
                                name="email"
                                value={formik.values.email} 
                                onChange={formik.handleChange}
                                error={ formik.touched.email && Boolean(formik.errors.email)}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <Button variant="contained" type="submit" className="form-Btn m-40">Submit</Button>
                            
                        </Box>
                    </div>
                ) : (
                    <div className='bookcall-formThankYou'>
                        <h2>Thank You</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam incidunt, commodi modi dolor recusandae in ea blanditiis possimus mollitia architecto. Fuga facilis fugiat eligendi accusantium accusamus. Iure repudiandae libero quia, quae asperiores dignissimos.</p>
                    </div>
                )
            }
            {formError === true ? (<p>SomeThing wrong in Server</p>) : '' }
            
            
        </div>
    </div>
  )
})