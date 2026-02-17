import React from 'react'

const App = () => {

// localStorage.clear()
// localStorage.setItem('user','Sharib')
// localStorage.setItem('age','20')

// const user = localStorage.getItem('user')

// const age = localStorage.getItem('age')
//   console.log(user,age);


// const user = localStorage.getItem('user')
// const age = localStorage.getItem('age')
// console.log(user,age);


// const string = {
//   username : 'Sk',
//   age : 20,
//   city : 'DVG'
// }

// localStorage.setItem('string',JSON.stringify(string))

// const data = localStorage.getItem('string')
// console.log(data);


const data = JSON.parse(localStorage.getItem('string'))
 console.log(data); 

  return (
    <div>
      App
    </div>
  )
}

export default App
 