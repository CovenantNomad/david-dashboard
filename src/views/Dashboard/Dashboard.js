import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebaseConfig'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";


import styles from "../../assets/jss/views/dashboardStyle";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import EnhancedTableHead from "../../components/Table/EnhancedTableHead";
import TableBody from "@material-ui/core/TableBody";
import {TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import {convertGrade, convertSex} from "../../util/common-code";

const useStyles = makeStyles(styles);

const Dashboard = () => {
  const classes = useStyles();
  const [ studentsNumber, setStudentsNumber ] = useState(0);
  const [dense, setDense] = React.useState(false);
  const [ studentList, setStudentList] = useState([]);

  useEffect(() => {
    counterDoc();
    initStudents();
  }, [])

  const counterDoc = () => {
    db.collection('studentsInfo').get()
    .then(snapshot => setStudentsNumber(snapshot.size));
  }

  const initStudents = () => {
    console.log(`initStudents!!`);
    db.collection('studentsInfo').get()
        .then((querySnapshot) => {
          let tempArray = [];
          querySnapshot.forEach((doc) => {
            tempArray.push({
              id: doc.id,
              ...doc.data()
            })
          })
          setStudentList(tempArray);
        });
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>학생수</p>
              <h2 className={classes.cardTitle}>{studentsNumber}</h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>다윗중고등부 온라인 등록 신청자 목록</h4>
            </CardHeader>
            <CardBody>
              <div className={classes.root}>
                <TableContainer>
                  <Table
                      className={classes.table}
                      aria-labelledby="tableTitle"
                      size={dense ? 'small' : 'medium'}
                      aria-label="enhanced table"
                  >
                    <EnhancedTableHead/>
                    <TableBody>
                      {
                        studentList.map((row, index) => {
                          const labelId = `enhanced-table-checkbox-${index}`;
                          return (
                              <TableRow>
                                <TableCell padding="checkbox">
                                  <Checkbox
                                      checked={false}
                                      inputProps={{ 'aria-labelledby': labelId }}
                                  />
                                </TableCell>
                                <TableCell component="th" id={labelId} scope="row" padding="none" align="left">
                                  {row.name}
                                </TableCell>
                                <TableCell align="left">{convertGrade(row.grade)}</TableCell>
                                <TableCell align="left">{row.phoneNumber}</TableCell>
                                <TableCell align="left">{row.birthday}</TableCell>
                                <TableCell align="left">{convertSex(row.sex)}</TableCell>
                              </TableRow>
                          )
                        })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default Dashboard;
