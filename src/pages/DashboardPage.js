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
import CardHeader from "components/Cards/Cards/CardHeader.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import componentStylesCardDeck from "assets/theme/components/cards/card-deck.js";
import CardHeaderAction from "components/Cards/Cards/CardHeaderAction";

const useStyles = makeStyles(componentStyles);
const useStylesCardDeck = makeStyles(componentStylesCardDeck);

function Dashboard() {
  const classes = { ...useStyles(), ...useStylesCardDeck() };
  const mainContent = {
    title: "Welcome to NewsTrack!",
    details:
      "At NewsTrack we keep track of recent news articles from various sources. Currently our selection is top tech compagnies such as Apple, Google, Microsoft, Amazon, Meta, and Tesla. You can also search for specific news articles by title or author. Theres much more to come in the future, we hope you enjoy our service! ",
  };

  const cardContent = {
    microsoft: {
      title: "Microsoft",
      description: "Click here to see the latest news from Microsoft",
      link: "Microsoft",
    },

    Meta: {
      title: "Meta",
      description: "Click here to see the latest news from Meta",
      link: "Meta",
    },

    Google: {
      title: "Google",
      description: "Click here to see the latest news from Google",
      link: "Google",
    },

    Apple: {
      title: "Apple",
      description: "Click here to see the latest news from Apple",
      link: "Apple",
    },

    Tesla: {
      title: "Tesla",
      description: "Click here to see the latest news from Tesla",
      link: "Tesla",
    },
    Twitter: {
      title: "Twitter",
      description: "Click here to see the latest news from Tesla",
      link: "Twitter",
    },
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
        <CardHeaderAction content={mainContent}></CardHeaderAction>
      </Container>
      <Container
        maxWidth={false}
        component={Box}
        marginTop="3rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Object.keys(cardContent).map((keyName, i) => (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <CardHeader content={cardContent[keyName]}></CardHeader>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
