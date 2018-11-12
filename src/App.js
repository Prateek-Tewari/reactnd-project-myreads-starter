import React from "react";
import * as BooksAPI from "./BooksAPI"; //API import for fetching books
import "./App.css";
import { Route } from "react-router-dom"; //
import mainPage from "./components/pages/mainPage"; //landing page component
import searchPage from "./components/pages/searchPage"; //search functionality component
class BooksApp extends React.Component {
  render() {
    return (
      //setting routes for pages
      <div>
        <Route exact path="/" component={mainPage} />
        <Route exact path="/search" component={searchPage} />
      </div>
    );
  }
}

export default BooksApp;
