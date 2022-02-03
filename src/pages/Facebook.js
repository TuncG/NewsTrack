import React, { useEffect, useState } from "react";

// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import Create from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";

import { makeApiCallEverything } from "../api/apiCall";

import useTable from "../components/useTable";

// @material-ui/lab components
// @material-ui/icons components
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

import componentStyles from "assets/theme/views/admin/react-bs-table.js";

const useStyles = makeStyles(componentStyles);

const headCells = [
  { id: "title", label: "Title", width: "18%" },
  {
    id: "author",
    label: "Author",
    width: "18%",
  },
  {
    id: "publishedAt",
    label: "Date",
    width: "18%",
    disableSorting: true,
    formatDate: true,
  },
  { id: "actions", label: "Actions", width: "18%", disableSorting: true },
];

const Facebook = () => {
  const classes = { ...useStyles() };
  const [alert, setAlert] = React.useState(null);
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  const copyToClipboardAsTable = (el) => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Good job!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        Copied to clipboard!
      </ReactBSAlert>
    );
  };

  const {
    formatDate,
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(newsArticles, headCells, filterFn);

  const handleSearch = (e) => {
    console.log("e", e);
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter(
            (x) =>
              x.title.toLowerCase().includes(target.value) ||
              (x.author ? x.author.toLowerCase().includes(target.value) : false)
          );
      },
    });
  };

  useEffect(() => {
    document.title = "Products";

    fetchFacebookNews("");
  }, []);

  /* Fetch Facebook api */
  const fetchFacebookNews = async function (search) {
    const apiParams = "&q=Facebook&from=2022-01-19&sortBy=popularity";
    let callResult = await makeApiCallEverything(apiParams);

    if (callResult.success) {
      console.log("getresult", callResult.data);
      setNewsArticles(callResult.data.articles);
    } else {
      /*  setErrorModalOpen({
        open: true,
        title: "Sorry!",
        subtitle: "We could not fetch the data, please refresh the page.",
      }); */
    }
  };

  return (
    <>
      {alert}
      <SimpleHeader section="Facebook page " subsection="Tables" />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-4.5rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Card elevation={0}>
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto" md={12} style={{ display: "flex" }}>
                      <Box
                        component={Typography}
                        variant="h2"
                        marginBottom="0!important"
                      >
                        <Box component="span">Facebook Article Table</Box>
                      </Box>
                      <Box
                        component="p"
                        fontSize=".875rem"
                        marginLeft="3rem"
                        marginTop="0.5rem"
                        lineHeight="1.7"
                        fontWeight="500"
                      >
                        Find all the recent mentions of Facebook in recent
                        articles and news headlines.
                      </Box>
                    </Grid>

                    <Grid item xs="auto" md={12} style={{ display: "flex" }}>
                      <OutlinedInput
                        type="search"
                        placeholder="Search alert"
                        onChange={handleSearch}
                      />
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TblContainer>
                <TblHead />
                <TableBody>
                  {recordsAfterPagingAndSorting().map((item) => (
                    <TableRow key={item.notifyId}>
                      {headCells.map((column) => {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ width: column.width }}
                          >
                            {column.id !== "actions" ? (
                              column.formatDate ? (
                                formatDate(item[column.id])
                              ) : (
                                item[column.id]
                              )
                            ) : (
                              <>
                                <Tooltip title="Go to article">
                                  <IconButton
                                    aria-label="Go to article"
                                    onClick={() => {
                                      window.open(item["url"], "_blank");
                                    }}
                                    disableRipple={true}
                                  >
                                    <Box
                                      component={Create}
                                      width="1.25rem!important"
                                      height="1.25rem!important"
                                      // color={theme.palette.gray[500]}
                                    />
                                  </IconButton>
                                </Tooltip>
                              </>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </TblContainer>
              <TblPagination />
              {/* Put table here */}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Facebook;
