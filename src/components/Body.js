import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchMovie from './WatchMovie'

const Body = () => {


  const appRouter= createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"/movie/:movieId",
          element:<WatchMovie/>
      }
    ])

  
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body