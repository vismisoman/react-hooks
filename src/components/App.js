import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import PageNotFound from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;