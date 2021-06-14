import React from 'react';

function Book (props) {
    console.log("from book.js",props.children)

    return(
      <div className="book_individual">
        {/* <a href=""> */}
            <div className="book_picture">
                <img src={props.children[5]}></img>
            </div>
            <div className="book_text">
                <div className="book_text_title">
                    <h2>{props.children[1]}</h2>
                </div>
                <div className="book_text_category">
                    <h6>{props.children[3]}</h6>
                </div>
                {/* <div className="Author">
                    <h6>{props.children[7]}</h6>

                </div> */}
            </div>
        {/* </a> */}
        
    
      </div>
    )
}

export default Book;