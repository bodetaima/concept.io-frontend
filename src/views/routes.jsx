import React, {Suspense} from "react";
import { Switch, Route } from "react-router-dom";
const Container = React.lazy(() => import("@components/home/Container"));

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Suspense fallback={<div className="bp3-skeleton"></div>}>
                    <Container />
                </Suspense>
            </Route>
            <Route path="/:pghash" />
        </Switch>
    );
}

export default Routes;
