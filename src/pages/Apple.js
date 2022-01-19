import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import StatsHeader from "components/Headers/StatsHeader.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import componentStylesCardDeck from "assets/theme/components/cards/card-deck.js";
import CardHeaderAction from "components/Cards/Cards/CardHeaderAction";

const useStyles = makeStyles(componentStyles);
const useStylesCardDeck = makeStyles(componentStylesCardDeck);

function Microsoft() {
  console.log("TEST");
  const classes = { ...useStyles(), ...useStylesCardDeck() };
  const content = {
    title: "MICROSOFT PAGE TWEST",
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
    </>
  );
}

export default Microsoft;
