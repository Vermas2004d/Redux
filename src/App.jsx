import React from "react";
import { useReducer, useEffect } from "react";
import MyContext from "./components/MyContext.js";
import Form from "./components/Form.jsx";
import axios from 'axios'
//reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD":
      return [action.payload, ...state];
    case "DELETE":
      return state.filter((item, index) => item.id !== action.payload);
    default:
      return state;
  }
}

const App = () => {

  const [data, dispatch] = useReducer(reducer, [])

  // useEffect(() => {
  //   fetch('https://69302960778bbf9e00701858.mockapi.io/Form2')
  //   .then((res) => res.json())
  //   .then((fetchedData) => {
  //     dispatch({type: 'INIT', payload: fetchedData})
  //   })
  //   .catch(err => console.error("Failed to fetch data", err))
  // } , [])

  //doing with the help of the axios
  useEffect(() => {

    const fetchedData = async () => {
      try {
        const response = await axios.get('https://69302960778bbf9e00701858.mockapi.io/Form2')
        dispatch({type: 'INIT', payload: response.data})
        
      } catch (error) {
          console.error("Failed to fetch data", error)
      }

    }

    fetchedData()
  }, [])

  // function addData(e){ 
  //   dispatch({type: 'ADD' , payload: e})
  // } 
  

  function addData(newData) {
  fetch("https://69302960778bbf9e00701858.mockapi.io/Form2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json()) 
    .then((savedData) => { 
      // dispatch only after API success
      dispatch({ type: "ADD", payload: savedData });
    })
    .catch((err) => console.error("Add failed", err));
  }

  // function deleteData(index){
  //   dispatch({type: 'DELETE', payload: index});
  // }

  function deleteData(id) {
  fetch(`https://69302960778bbf9e00701858.mockapi.io/Form2/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    
  })
    .then(() => {
      dispatch({ type: "DELETE", payload: id });
    })
    .catch((err) => console.error("Delete failed", err));
}

  

  return <div className="min-h-screen bg-gray-100 p-10" >
    <MyContext.Provider value={{addData: addData, data: data , deleteData: deleteData}} >
        <Form />
    </MyContext.Provider>
  </div>;
};

export default App;
