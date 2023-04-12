import { useState } from 'react';
import './App.css';
import { useFetch } from './useFetch';

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {

  const {data: userData} = useFetch(baseUrl, 'users');
  const {data: postData} = useFetch(baseUrl, 'posts');

  return (
    <div>
      <h1>useFe</h1>
      <h1>User</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>Posts</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}

    </div>
  );

}
 
export default App;
 