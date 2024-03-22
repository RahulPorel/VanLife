import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans, { Loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as VanDetailLoader } from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Layout from "./components/Layout/Layout.jsx";
import HostLayout from "./components/HostLayout/HostLayout.jsx";
import "../server.js";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Error from "./components/Error/Error.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={VanDetailLoader}
        />

        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => {
              return null;
            }}
          />

          <Route
            path="vans"
            element={<HostVans />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="vans/:id"
            element={<HostVanDetails />}
            loader={async () => {
              return null;
            }}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async () => {
                return null;
              }}
            />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
