const componentStyles = (theme) => ({
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "19rem",
      paddingRight: "19rem",
    },
  },
  gridItemRoot: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "0!important",
    },
  },
});

export default componentStyles;
