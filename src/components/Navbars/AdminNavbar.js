import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Toolbar from "@material-ui/core/Toolbar";

// core components
/* import UserDropdown from "components/Dropdowns/UserDropdown.js";
 */
import componentStyles from "assets/theme/components/navbars/admin-navbar.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(componentStyles);

export default function AdminNavbar({ openSidebarResponsive }) {
  const classes = useStyles();
  const theme = useTheme();
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        classes={{ root: classes.appBarRoot }}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              marginTop="1rem"
              marginBottom="4rem"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginLeft="auto"
                className={clsx(classes.marginLeftNone, {
                  [classes.displayNone]: showSearch,
                })}
              ></Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={clsx(classes.marginLeftAuto, {
                  [classes.displayNone]: showSearch,
                })}
              >
                {/*                 <UserDropdown />*/}
                <Button variant="contained" color="default">
                  {" "}
                  Login{" "}
                </Button>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
AdminNavbar.defaultProps = {
  openSidebarResponsive: () => {},
};

AdminNavbar.propTypes = {
  // use this to make the Sidebar open on responsive mode
  openSidebarResponsive: PropTypes.func.isRequired,
};
