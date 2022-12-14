import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Archive from './routes/archive';
import Post from './routes/post'
import Header from './components/header'
import Footer from './components/footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
  {
    path: "/post/:postId",
    element: <Post />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Header />
        <div className="container mx-auto px-3">
          <RouterProvider router={router} />
        </div>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
