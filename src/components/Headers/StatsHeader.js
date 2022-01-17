import React from "react";
import PropTypes from "prop-types";
/* import clsx from "clsx";
 */ // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
/* import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs"; */
import Container from "@material-ui/core/Container";
/* import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography"; */
// @material-ui/icons components
/* import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import GroupAdd from "@material-ui/icons/GroupAdd";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PieChart from "@material-ui/icons/PieChart"; */

// core components
/* import CardStats from "components/Cards/Dashboard/CardStats.js";
 */
import componentStyles from "assets/theme/components/headers/stats-header.js";

const useStyles = makeStyles(componentStyles);

const StatsHeader = ({ section, subsection }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        ></Container>
      </div>
    </>
  );
};

StatsHeader.propTypes = {
  section: PropTypes.string,
  subsection: PropTypes.string,
};

export default StatsHeader;
