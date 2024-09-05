import { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { DB_URL } from './components/const'
import { products } from './components/data'

function App() {
  useEffect(()=>{
    fetch(DB_URL +'/products.json',{
      method: 'PUT',
      body: JSON.stringify(products),
      headers:{
        'Content-type':'application/json; charset=UTF-8',
      },
    });
  });
  return (
    <>
     {/* <Header /> */}
     <Main />
    </>
  );
}

export default App;
