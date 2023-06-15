import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About"
import Project from "./pages/Project/view";
import Contact from "./pages/Contact/view"
import NotFound from "./pages/NotFound";
import 'css-doodle';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="" element={<About />}/>
      <Route path="contact" element={<Contact />} />
      <Route path="project"  element={<Project/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
