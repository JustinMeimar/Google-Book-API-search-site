import React, {useState, useEffect} from 'react';

function Form (props) {
    
    const inputTextHandler = (e) => {
        e.preventDefault()
        props.setInputText(e.target.value)
        
    }

    const setSearch = (e) => {
        e.preventDefault()
        props.setSearch(props.inputText)
        console.log(props.search)
    }

    return(
        <form>
            <input value={props.inputText} onChange={inputTextHandler}type='text'></input>
            <input onClick={setSearch} type="submit"></input>
        </form>
    )
}

export default Form