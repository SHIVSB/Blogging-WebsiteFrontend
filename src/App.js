import Login from "./components/loginPage";
import Home from "./components/home";
import Post from "./components/posts";
import Details from "./components/userDetail";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
			<Routes>

      <Route
					exact
					path="/"
					element={
						<Suspense fallback={<div className="loader"></div>}>
							<Login />
						</Suspense>
					}
				/>

				<Route
					exact
					path="/home"
					element={
						<Suspense fallback={<div className="loader"></div>}>
							<Home />
						</Suspense>
					}
				/>
				
				<Route
					exact
					path="/post"
					element={
						<Suspense fallback={<div className="loader"></div>}>
							<Post />
						</Suspense>
					}
				/>

<Route
					exact
					path="/user/details"
					element={
						<Suspense fallback={<div className="loader"></div>}>
							<Details />
						</Suspense>
					}
				/>
			</Routes>
		</Router>
  );
}

export default App;
