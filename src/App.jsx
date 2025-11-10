import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./Contexts/CitiesProvider";
import { AuthProvider } from "./Contexts/FakeAuthProvider";
import { ProtectedRoute } from "./pages/ProtectedRoute";

import CountryList from "./components/CountryList";
import SpinnerFullPage from "./components/SpinnerFullPage";
import City from "./components/City";
import Form from "./components/Form";
import CityList from "./components/CityList";

// Dynamic import to decrease bundle size
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          {/* Used for lazy loading of import statement for reducing bundle size */}
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* We can also use index keyword instead of path="/" */}
              <Route path="/" element={<Homepage />} />{" "}
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* The following Navigate is a component provided by react-router-dom. */}
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
