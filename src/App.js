import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { Route, Routes, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  pageSize = 15;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <LoadingBar color="#f11946" progress={this.state.progress} />
            <Routes>
              <Route
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={this.pageSize}
                    category="general"
                  />
                }
              />

              <Route
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={this.pageSize}
                    category="business"
                  />
                }
              />

              <Route
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={this.pageSize}
                    category="entertainment"
                  />
                }
              />

              <Route
                path="/general"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={this.pageSize}
                    category="general"
                  />
                }
              />

              <Route
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={this.pageSize}
                    category="health"
                  />
                }
              />

              <Route
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={this.pageSize}
                    category="science"
                  />
                }
              />

              <Route
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={this.pageSize}
                    category="sports"
                  />
                }
              />

              <Route
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={this.pageSize}
                    category="technology"
                  />
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
