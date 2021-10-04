import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Switch>
					{/* home default */}
					<Route exact path="/">
						<Home />
					</Route>

					{/* home  */}
					<Route path="/home">
						<Home />
					</Route>

					{/* services router  */}
					<Route path="/services">
						<Services />
					</Route>

					{/* about router  */}
					<Route path="/About">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>

					{/* notfound router  */}
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
