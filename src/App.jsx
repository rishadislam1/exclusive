import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Fragment, lazy, Suspense} from "react";
import router from "./Router/router.jsx";
import Main from "./Layout/Main.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          {router.map((route, index) => (
              <Route key={index} path={route.url} element={<Fragment>
                  <Main>
                      <Suspense>
                          <route.component />
                      </Suspense>
                  </Main>
              </Fragment>} />
          ))}
        </Routes>
      </BrowserRouter>
  );
}
