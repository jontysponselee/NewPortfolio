import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import {MuiThemeProvider} from "@material-ui/core";
import useApplicationTheme from "./hooks/useApplicationTheme";
import ApplicationRouter from "./Router/ApplicationRouter";

export const homepageImageUrl = `${process.env.PUBLIC_URL}/images/homepageImage.jpg`;

function App() {
    const theme = useApplicationTheme();

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <ApplicationRouter/>
        </MuiThemeProvider>
    );
}

export default App;
