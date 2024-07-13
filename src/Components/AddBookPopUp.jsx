import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as yup from 'yup'
import MyContext from '../Context/MyContext'

const AddBookPopUp = () => {

    const { closeIconStatus, setCloseIconStatus,getUserValues } = useContext(MyContext);

    const formik = useFormik({
        initialValues: {
            bookTitle: '',
            isbnNumber: '',
            publicationDate: '',
            authorName: '',
            dateOfBirth: '',
            biography: ''
        },
        validationSchema: yup.object({
            bookTitle: yup.string().required('Required'),
            isbnNumber: yup.string().required('Required'),
            publicationDate: yup.date()
                .required('Required')
                .max(new Date(), 'Date cannot be in future'),
            authorName: yup.string().required('Required'),
            biography: yup.string()
                .required('Required')
                .max(200, 'Not more than 200 characters'),
            dateOfBirth: yup.date()
                .required('Required')
                .max(new Date(), 'Date cannot be in future')
        }),
        onSubmit: (values) => {
            getUserValues(values);
            formik.resetForm();
            setCloseIconStatus(!closeIconStatus);
            document.body.style.overflow = 'auto'

        }
    })

    const closeIconClick = () => {
        setCloseIconStatus(!closeIconStatus);
        document.body.style.overflow = 'auto'
    }
    return (
        <>
            {
              closeIconStatus && <div className='pop-up-container'>
              <form action="" onSubmit={formik.handleSubmit}>
                  <div className='pop-up'>
                      <i onClick={closeIconClick} className='bx bx-x close-icon'></i>
                      <p className='text-center fs-4'>Book Details</p>
  
                      {formik.touched.bookTitle && formik.errors.bookTitle
                          ? (<div className='error-msg'>{formik.errors.bookTitle}</div>)
                          : null
                      }
                      <input
                          type="text"
                          placeholder='Book title'
                          {...formik.getFieldProps('bookTitle')}
                      />
                      {formik.touched.isbnNumber && formik.errors.isbnNumber
                          ? (<div className='error-msg'>{formik.errors.isbnNumber}</div>)
                          : null
                      }
                      <input
                          type="text"
                          placeholder='ISBN number'
                          {...formik.getFieldProps('isbnNumber')}
                      />
                      <label htmlFor="">Publication date 👇</label>
                      {formik.touched.publicationDate && formik.errors.publicationDate
                          ? (<span className='error-msg'>{formik.errors.publicationDate}</span>)
                          : null
                      }
  
                      <input
                          type="date"
                          {...formik.getFieldProps('publicationDate')}
                      />
                      <hr />
                      <p className='text-center fs-4'>Author Details</p>
                      {formik.touched.authorName && formik.errors.authorName
                          ? (<div className='error-msg'>{formik.errors.authorName}</div>)
                          : null
                      }
                      <input
                          type="text"
                          placeholder='Author name'
                          {...formik.getFieldProps('authorName')}
                      />
                      <label htmlFor="">Date of birth 👇</label>
                      {formik.touched.dateOfBirth && formik.errors.dateOfBirth
                          ? (<span className='error-msg'>{formik.errors.dateOfBirth}</span>)
                          : null
                      }
                      <input
                          type="date"
                          {...formik.getFieldProps('dateOfBirth')}
                      />
                      {formik.touched.biography && formik.errors.biography
                          ? (<span className='error-msg'>{formik.errors.biography}</span>)
                          : null
                      }
                      <textarea
                          name="" id=""
                          placeholder='Short biography'
                          {...formik.getFieldProps('biography')}
                      ></textarea>
                      <button className='add-book' type='submit'>Add Book</button>
                  </div>
              </form>
          </div>
            }
        </>
    )
}

export default AddBookPopUp