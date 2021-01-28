import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Switch, Route, Redirect, NavLink} from "react-router-dom";
import 'fontsource-roboto';

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/toolkit">Toolkit</NavLink>
            <NavLink to="/about-me">About me</NavLink>
            <NavLink to="/contact-me">Contact me</NavLink>

            <Switch>
                <Route exact path={"/"}>
                    <p>homepage</p>
                </Route>
                <Route exact path={"/projects"}>
                    <p>projects</p>
                </Route>
                <Route exact path={"/toolkit"}>
                    <p>toolkit</p>
                </Route>
                <Route exact path={"/about-me"}>
                    <p>About me</p>
                </Route>
                <Route exact path={"/contact-me"}>
                    <p>Contact me</p>
                </Route>
                <Route path={"*"}>
                    <Redirect to={"/"}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
