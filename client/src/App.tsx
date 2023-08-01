import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SIgnUp";
import Layout from "./components/layout/Layout";
import Onboarding from "./pages/Onboarding";
import ChannelConnect from "./pages/ChannelConnect";
import { useUserStore } from "./store/userStore";

function App() {
  const user = useUserStore((state) => state.user);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user && (
          <>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/onboarding/connect" element={<ChannelConnect />} />
            <Route path="/home" element={<Home />} />
          </>
        )}
        <>
          <Route path="/" element={<Layout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Landing />} />
          </Route>
          <Route path="*" element={<Landing />} />
        </>
      </>
    )
  );

  // Helper function to render the appropriate routes based on user login status
  // const renderRoutes = () => {
  //   if (user) {
  //     return (
  //       <>
  //         <Route path="/" element={<Layout />}>
  //           <Route path="/onboarding" element={<Onboarding />} />
  //           <Route path="/onboarding/connect" element={<ChannelConnect />} />
  //           <Route path="/home" element={<Home />} />
  //         </Route>
  //         <Route path="*" element={<Home />} />{" "}
  //         {/* Default route for logged-in users */}
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Route path="/signin" element={<SignIn />} />
  //         <Route path="/signup" element={<SignUp />} />
  //         <Route path="/" element={<Landing />} />
  //         <Route path="*" element={<Landing />} />{" "}
  //         {/* Default route for guests */}
  //       </>
  //     );
  //   }
  // };

  // const router = createBrowserRouter(createRoutesFromElements(renderRoutes()));

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
