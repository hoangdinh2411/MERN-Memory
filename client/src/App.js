import { Container } from "@material-ui/core";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingRequest } from "store/thunks";
import "./App.css";
import Home from "pages/home/";
import Auth from "pages/auth/";
import AppBarComponent from "components/appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const user = JSON.parse(localStorage.getItem("profile"))
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchingRequest());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <AppBarComponent />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
