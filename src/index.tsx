import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RecentChats from 'pages/RecentChats';
import UsersChats from 'pages/UsersChats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecentChats/>
  },
  {
    path: "/user/:id",
    element: <UsersChats/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={router}/>
);
