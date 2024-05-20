import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
const Header = React.lazy(()=> import('home/Header'))

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Suspense fallback={()=> (<div>Loading....</div>)}>
      <Header name={"| Annie"}/>
      </Suspense>
    </SafeComponent>
    <div class="my-5">My page content</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));