import './App.css';
import Navbar from './components/Navbar';
import Filespage from './components/Filespage';
import Home from './components/Home';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AssignmentsPage from './components/AssignmentsPage';
import SkillsPage from './components/SkillsPage';
import AboutUs from './components/AboutUs';
// import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

// const router= createBrowserRouter([
	
//   {
//       path:'/',
//       element:<Navbar/>,
//       children: [
//         {
//           path: "",
//           element: <Home/>,
//         },
//         {
//             path: "Filespage",
//             element: <Filespage/> 
//         }
//       ],
//   }, 
// ])

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router}/> */}

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Navbar /></>}>
        <Route path="/" element={<Home/> }></Route>
        <Route path="/Filespage" element={<Filespage/>}></Route>
        <Route path="/Assignmentspage" element={<AssignmentsPage/>}></Route>
        <Route path="/Skillspage" element={<SkillsPage/>}></Route>
        <Route path="/AboutUspage" element={<AboutUs/>}></Route>

      </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
