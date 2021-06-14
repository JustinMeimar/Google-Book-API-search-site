import React, {useState, useEffect} from 'react';
import Form from './form.js'
import Results from './results.js';

// https://www.googleapis.com/books/v1/volumes?q=search+terms
function Books () {

    const [items, setItems] = useState([]);
    const [inputText, setInputText] = useState('');
    const [search, setSearch] = useState('1984');
    

    useEffect(() => {
        try {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            .then(res => res.json())
            .then((response) => {
              
                setItems(response.items);
                console.log(response.items)
                
            })
        } catch(err) {
            setItems("No Search")
        }
       
    }, [search])

    return(
        <div className="Books">
            <h1>Search Google Books Api!</h1>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                search={search}
                setSearch={setSearch}
            />
            <div className="results">
                <Results
                    search={search}
                    items={items}
                /> 
            </div>
        </div>
    );

}

export default Books;