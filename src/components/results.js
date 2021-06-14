import React, {useState, useEffect} from 'react';
import Book from './book.js'

function Results (props) {
    
    if (props.items === undefined){
        console.log("PROPS.search:",props.search)
        return(
            <div>
                Enter a book genre to search....
            </div>
        );
       

    } else{
        // const img = item.volumeInfo.imageLinks['smallThumbnail']

        try {
            console.log(props.items);
            return(
                
                <div>
                    <h1> Books Relating to.... {props.search}</h1>
                    {props.items.map(item => (
                        
                        <div className="book_item">
                            <Book>
                                title={item.volumeInfo.title}
                                category={item.volumeInfo.categories}
                                img={item.volumeInfo.imageLinks['smallThumbnail']}
                                {/* author={item.volumeInfo.authors}
                                link={item.searchInfo.selfLink} */}
                           </Book>

                        </div>
                    ))}
                
                </div>
            );
        } catch{
            return(
                <div>
                    There is nothing on this topic.
                </div>
            );
            
        }
       
    }
    
}

export default Results