import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { publishRoutes } from "./Routes";

//layout
import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publishRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
