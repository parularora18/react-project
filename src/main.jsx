import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Posts from './components/routes/Posts.jsx'
import './index.css'
import NewPost from './components/routes/NewPost.jsx';
import RootLayout from './components/routes/RootLayout.jsx';
const router = createBrowserRouter([
  { path: '/', element: <RootLayout />,
     children: [
      { path: '/', element: <Posts />, 
        children: [ {path: '/create-post', element: <NewPost />}]},
 
  ]},
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}/>
  </React.StrictMode>,
)
