


// // Петрвый метод

// // import { useFormik } from "formik";

// // function MyFormik() {
// //      const formik = useFormik({
// //           initialValues: {
// //                firstName: '',
// //                email:'',
// //           },
// //           validate: (values)=>{
// //                const errors ={};
// //                if(!values.firstName){
// //                     errors.firstName ='Required'
// //                } else if (values.firstName.length >15) {
// //                     errors.firstName = 'Must be 15 characters or less'
// //                }

// //                if(!values.email){
// //                    errors.email ='Required'
// //                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// //                     errors.email = 'Invalid email address'
// //                }

// //                return errors
// //           },
// //           onSubmit: (values) => {         
// //                console.log('submit', values);
// //           }, 
// //      });

// //      console.log(formik.errors);

// //      // function handleFormSubmit(e) {
// //      //      e.preventDefault();
// //      // }
// //      return ( 
// //           <div>
// //                <h1>MyFormik</h1>
// //                <form onSubmit={formik.handleSubmit}>
// //                     <div className="mb-3 w-25">
// //                          <label htmlFor="firstName" className="form-label">
// //                               First Name:
// //                          </label>
// //                          <input
// //                               type="text"
// //                               className={
// //                                    formik.touched.firstName && formik.errors.firstName
// //                                    ? 'form-control is-invalid'
// //                                    : 'form-control'
// //                               }
// //                               id="firstName"
// //                               value={formik.values.firstName}
// //                               onChange={formik.handleChange}
// //                               onBlur={formik.handleBlur}
// //                          />
// //                          {formik.touched.firstName && formik.errors.firstName ? (
// //                               <div className="text-danger">
// //                                     {formik.errors.firstName}
// //                               </div>
// //                          ): null}
// //                     </div>  
// //                     <div className="mb-3 w-25">  
// //                          <label htmlFor="email" className="form-label">
// //                               Email address:
// //                          </label>
// //                          <input
// //                               type="email"
// //                               className={
// //                                    formik.touched.email && formik.errors.email
// //                                    ? 'form-control is-invalid'
// //                                    : 'form-control'
// //                               }
// //                               id="email"
// //                               value="name@example.com"
// //                               placeholder="name@example.com"
// //                               value={formik.values.email}
// //                               onChange={formik.handleChange}
// //                               onBlur={formik.handleBlur}
// //                          />
// //                          {formik.touched.email && formik.errors.email ? (
// //                               <div className="text-danger">
// //                                     {formik.errors.email}
// //                               </div>
// //                          ): null}
// //                     </div>  
// //                     <button type="submit" className="btn btn-primary">Submit</button>
// //                </form>
// //           </div>       
// //      );
// // }



// // Второй метод
// import {ErrorMessage, Field, Form, Formik, useFormik} from 'formik';

// function MyFormik() {
//      const initialValues ={
//           firstName: '',
//           email:'',   
//      }
//      const validate =(values) => {
//           const errors ={};
//           if(!values.firstName){
//                errors.firstName ='Required'
//           } else if (values.firstName.length > 15) {
//                errors.firstName = 'Must be 15 characters or less'
//           }
//           if(!values.email){
//               errors.email ='Required'
//           } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                errors.email = 'Invalid email address'
//           }
//           return errors;
//      }

//      const onSubmit = (values) => {
//           console.log('submit', values);
//      }

//      const formik = useFormik({
//           initialValues: initialValues,
//           validate: validate,
//           onSubmit: onSubmit,
//      });

//      return ( 
//           <div>
//                <h1>MyFormik</h1>            
//                <Formik               
//                     initialValues={initialValues} 
//                     validate={validate} 
//                     onSubmit={onSubmit}
//                     >  
//                     <Form >
//                     <div className="mb-3 w-25">
//                          <label htmlFor="firstName" className="form-label">
//                               First Name:
//                          </label>
//                          <Field className="form-control" type="text" id="firstName" name="firstName"/>
//                          <ErrorMessage component ="div" className="text-danger" name="firstName"/>
//                     </div>
//                     <div className="mb-3 w-25">
//                          <label htmlFor="email" className="form-label">
//                               Email:
//                          </label>
//                          <Field className="form-control" type="email" id="email" name="email"/>
//                          <ErrorMessage component ="div" className="text-danger" name="email"/>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button> 
//                     </Form>
//                </Formik>
//           </div>       
//      );
// }

// export default MyFormik;