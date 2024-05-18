import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div class="my-5">My page content</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
