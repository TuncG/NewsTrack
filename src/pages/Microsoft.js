import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// @material-ui/icons components
import Grid from "@material-ui/core/Grid";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminNavbarAlternative from "components/Navbars/AdminNavbarAlternative.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import componentStyles from "assets/theme/layouts/admin.js";
import CardHeaderAction from "components/Cards/Cards/CardHeaderAction";

import CardSalesValueAlternative from "components/Cards/Alternative/CardSalesValueAlternative.js";
import CardSalesValueDots from "components/Cards/Charts/CardSalesValueDots.js";

const useStyles = makeStyles(componentStyles);
const content = {
  title: "MICROSOFT PAGE",
  details:
    "At NewsTrack we keep track of important information regarding the big tech compagnies, check out our links at the sidebar for more info.",
};
const Admin = () => {
  const classes = useStyles();
  const location = useLocation();
  const [sidebarOpenResponsive, setSidebarOpenResponsive] =
    React.useState(false);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <Box display="flex">
        <Sidebar
          routes={routes}
          openResponsive={sidebarOpenResponsive}
          closeSidebarResponsive={() => setSidebarOpenResponsive(false)}
          logo={{
            innerLink: "/index",
            imgSrc: require("../assets/img/brand/argon-react.png").default,
            imgAlt: "...",
          }}
        />

        <Box position="relative" flex="1" className={classes.mainContent}>
          {location.pathname === "/admin/alternative-dashboard" ? (
            <AdminNavbarAlternative
              openSidebarResponsive={() => setSidebarOpenResponsive(true)}
            />
          ) : (
            <AdminNavbar
              openSidebarResponsive={() => setSidebarOpenResponsive(true)}
            />
          )}

          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/admin/dashboard" />
          </Switch>

          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            {/* CARD HERE */}
            <Container>
              {" "}
              <CardHeaderAction content={content} />
            </Container>

            <Container
              maxWidth={false}
              component={Box}
              marginTop="5rem"
              classes={{ root: classes.containerRoot }}
            >
              <Grid container>
                <Grid item xs={12} xl={6}>
                  <CardSalesValueAlternative />
                </Grid>
                <Grid item xs={12} xl={6}>
                  <CardSalesValueDots />
                </Grid>
              </Grid>
            </Container>

            <AdminFooter />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
