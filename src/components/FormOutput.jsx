import React from 'react'
import { useContext } from 'react'
import MyContext from './MyContext.js'


const FormOutput = () => {
  let {data, deleteData} = useContext(MyContext)

  return (
    <div >
      {data.map((value, index) => 
      (
        <div className='border border-blue-500 bg-gray-300 p-3 mb-2 rounded-lg' key={value.id}>

          {value.image &&
           <img className='w-40 h-40 object-cover' src={value.image} alt={value.name} />
           }

           <div>
            {value.name}
           </div>

           <div>
            {value.email}
           </div>

           <div>
            {value.password}
           </div>

           <div>
            {value.number}
           </div>

           <button onClick={() => deleteData(value.id)}>Delete data</button>
        </div>
      ))}

    </div>
  )
}

export default FormOutput