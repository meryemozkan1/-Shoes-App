import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" min-h-screen  bg-gray px-4 py-6 md:px-6 md:py-8 lg:px-8 xl:px-14 xl:py-8">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
