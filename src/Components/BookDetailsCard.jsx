import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../Context/MyContext';

const BookDetailsCard = ({book}) => {
    const [showMoreStatus, setShowMoreStatus] = useState(false);
    const { deleteBook } = useContext(MyContext);
    const readMore = () => {
        setShowMoreStatus(true)
    }

    const readLess = () => {
        setShowMoreStatus(false)
    }

    const handleDeleteClick = () => {
        deleteBook(book.id)
    }
    return (
        <div className='col-xl-4'>
            <div className="book-details mt-3">
                <p><span className="fw-semibold purple fw-bold">Book Name:</span> {book.bookTitle}</p>
                <p><span className="fw-semibold purple fw-bold" >ISBN Number: </span> {book.isbnNumber}</p>
                <p> <span className="fw-semibold purple fw-bold">Publication Date: </span> {book.publicationDate}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    {
                        !showMoreStatus
                            ? <p onClick={readMore} className='read-more'>Show More</p>
                            : <p onClick={readLess} className='read-more'>Show Less</p>
                    }
                    <div>
                        <button className='custom-btn edit-btn'>Edit</button>
                        <button onClick={handleDeleteClick} className='custom-btn delete-btn'>Delete</button>
                    </div>
                </div>
            </div>

            <div className={showMoreStatus ? "author-details display mt-1" : "author-details"}>
                <p className='fw-bold purple'>Author Details 👇</p>
                <p><span className="fw-semibold">Author Name:</span> {book.authorName}</p>
                <p><span className="fw-semibold" >Date of birth: </span> {book.dateOfBirth}</p>
                <p> <span className="fw-semibold">Biography: </span> {book.biography}</p>
            </div>
        </div>
    )
}

export default BookDetailsCard