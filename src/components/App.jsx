import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Carousel from "./Carousel";
import FormHeaderFooter from "./FormHeaderFooter";
import RequestForAccess from "./RequestForAccess";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Reset from "./Reset";
import Taste from "../images/taste.png";
import Commerce from "../images/commerce.png";
import Engage from "../images/engage.png";
import MayaLogo from "../images/Maya logo.png";
import FooterLogo from "../images/footerLogo.png";
import RequestForAccessInfo from "./RequestForAccessInfo";
import ForgotPasswordInfo from "./ForgotPasswordInfo";
import ResetCredentialInfo from "./ResetCredentialInfo"

function App() {
    return (
        <Router>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <Carousel active={true} heading="Taste" image={Taste} />
                        <Carousel active={false} heading="Commerce" image={Commerce} />
                        <Carousel active={false} heading="Engage" image={Engage} />
                    </div>
                </div>

                <div className="form">
                    <FormHeaderFooter footer={false} image={MayaLogo} content="AI powered personalization engine dedicated to understanding human tastes" />

                    <Switch>
                        <Route path="/requestforaccess">
                            <RequestForAccess />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/forgotpassword">
                            <ForgotPassword />
                        </Route>
                        <Route path="/reset">
                            <Reset title="Reset your credential" set={false} />
                        </Route>
                        <Route path="/set">
                            <Reset set={true} />
                        </Route>
                        <Route path="/forgotpasswordinfo">
                            <ForgotPasswordInfo />
                        </Route>
                        <Route path="/resetinfo">
                            <ResetCredentialInfo />
                        </Route>
                        <Route path="/:user">
                            <RequestForAccessInfo />
                        </Route>
                    </Switch>
                    
                    <FormHeaderFooter footer={true} image={FooterLogo} content="© 2020 All Rights Reserved by Crayon Data Pte Ltd and it’s registered trademark maya.ai" />
                </div>
            </div>
        </Router>
    );
}

export default App;
