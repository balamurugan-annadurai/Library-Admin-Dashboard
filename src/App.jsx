import React, { useReducer, useState } from 'react'
import './App.css'
import AddBookPopUp from './Components/AddBookPopUp'
import MyContext from './Context/MyContext';
import BookDetailsCard from './Components/BookDetailsCard';
import { reducer } from './Reducer/Reducer';


const App = () => {
  const [closeIconStatus, setCloseIconStatus] = useState(false);
  const [books, dispatch] = useReducer(reducer, []);
  const addBookClick = () => {
    setCloseIconStatus(true);
    document.body.style.overflow = 'hidden'
  }

  const getUserValues = (values) => {
    dispatch({
      type: 'ADD',
      payload: values
    })
  }

  const deleteBook = (id) => {
    dispatch({
      type: 'DELETE',
      id:id,
    })
  }
  return (
    <>
      <MyContext.Provider value={{
        closeIconStatus,
        setCloseIconStatus,
        getUserValues,
        deleteBook
      }}>
        <div className='container outer-container d-flex flex-column align-items-center'>
          <AddBookPopUp />
          <h1 className='title'>Admin Dashboard</h1>
          <div onClick={addBookClick} className='add-book'>Add Book</div>
          
          <div className="mt-4 row container w-100 justify-content-center">
            {
              books.map((book) => (
                <BookDetailsCard book={book} key={book.id} />
              ))
            }
          </div>
        </div>
      </MyContext.Provider>
    </>
  )
}

export default App