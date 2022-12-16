import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components

// core components

import componentStyles from "assets/theme/components/cards/cards/card-header-action.js";

const useStyles = makeStyles(componentStyles);

export default function CardLink({ content }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cardRoot}>
        <CardContent>
          <Box
            component="p"
            marginBottom="1rem"
            fontWeight="300"
            lineHeight="1.7"
            fontSize="1rem"
            marginTop="0"
          >
            {content.details}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
