import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import pageNotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shered/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/service/:serviceId">
              <Booking></Booking>{" "}
            </PrivateRoute>
            <Route path="*" component={pageNotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
