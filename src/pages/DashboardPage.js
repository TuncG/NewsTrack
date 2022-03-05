import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
/* import Grid from "@material-ui/core/Grid";
 */ // @material-ui/icons components

// core components
import StatsHeader from "components/Headers/StatsHeader.js";
/* import CardSalesValueAlternative from "components/Cards/Alternative/CardSalesValueAlternative.js";
import CardSalesValueDots from "components/Cards/Charts/CardSalesValueDots.js"; */
import Grid from "@material-ui/core/Grid";

/* import CardTeamMembers from "components/Cards/Dashboard/CardTeamMembers.js";
import CardToDoList from "components/Cards/Dashboard/CardToDoList.js";
import CardProgressTrack from "components/Cards/Dashboard/CardProgressTrack.js";
import CardActivityFeed from "components/Cards/Dashboard/CardActivityFeed.js";
import CardLightTable from "components/Cards/Dashboard/CardLightTable.js";
import CardCreditDetails from "components/Cards/Dashboard/CardCreditDetails.js";
import CardCredit from "components/Cards/Dashboard/CardCredit.js";
import CardPageVisits from "components/Cards/Dashboard/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/Dashboard/CardSocialTraffic.js"; */

import componentStyles from "assets/theme/views/admin/dashboard.js";
import componentStylesCardDeck from "assets/theme/components/cards/card-deck.js";
import CardHeaderAction from "components/Cards/Cards/CardHeaderAction";

const useStyles = makeStyles(componentStyles);
const useStylesCardDeck = makeStyles(componentStylesCardDeck);

function Dashboard() {
  const classes = { ...useStyles(), ...useStylesCardDeck() };
  const content = {
    title: "Welcome to NewsTrack!",
    details:
      "At NewsTrack we keep track of important information regarding the big tech compagnies, check out our links at the sidebar for more info.",
  };
  return (
    <>
      <StatsHeader />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <CardHeaderAction content={content}></CardHeaderAction>
      </Container>
      <Container
        maxWidth={false}
        component={Box}
        marginTop="3rem"
        classes={{ root: classes.containerGraph }}
      >
        <Grid container>
          {/* <Grid item xs={12} xl={6}> To add later
            <CardSalesValueAlternative />
          </Grid>
          <Grid item xs={12} xl={6}>
            <CardSalesValueDots />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
