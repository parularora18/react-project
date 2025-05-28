import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Posts, { loader as postsLoader } from './components/routes/Posts';
import './index.css'
import NewPost, { action as newPostAction } from './components/routes/NewPost';
import RootLayout from './components/routes/RootLayout';
const router = createBrowserRouter([
  { path: '/', element: <RootLayout />,
     children: [
      { path: '/', element: <Posts />, 
        loader: postsLoader,
        children: [ {path: '/create-post', element: <NewPost />, action: newPostAction },
          {path: '/:id'}
        ]},
        
  ]},
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}/>
  </React.StrictMode>,
)
