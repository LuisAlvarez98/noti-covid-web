import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const TotalCasesText = styled.h1`
  color: green;
  font-size: 42px;
`;

const ActiveCasesText = styled.h1`
  color: green;
  font-size: 24px;
`;

const RecoveredText = styled.h1`
  color: orange;
  font-size: 24px;
`;

const DeathsText = styled.h1`
  color: red;
  font-size: 24px;
`;

const Container = styled.div`
  padding: 32px;
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(municipality: string, cases: number) {
  return { municipality, cases };
}

const rows = [
  createData("Monterrey", 159),
  createData("Guadalupe", 237),
  createData("Apodaca", 262),
  createData("San Nicolas", 305),
  createData("Escobedo", 356),
];
const LandingView = () => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <div>
          <h1>Casos COVID19 en Nuevo Leon</h1>
          <h2>Casos totales:</h2>
          <TotalCasesText>1,200,324</TotalCasesText>
        </div>
        <Grid container>
          <Grid item xs={4}>
            <h2>Casos activos:</h2>
            <ActiveCasesText>1,200,324</ActiveCasesText>
          </Grid>
          <Grid item xs={4}>
            <h2>Recuperados:</h2>
            <RecoveredText>1,200,324</RecoveredText>
          </Grid>
          <Grid item xs={4}>
            <h2>Defunciones:</h2>
            <DeathsText>1,200,324</DeathsText>
          </Grid>
        </Grid>
        <h2 style={{ marginTop: "2.5em", textAlign: "left" }}>
          Casos COVID19 por municipio:
        </h2>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Casos por municipio</TableCell>
                <TableCell align="center">Casos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.municipality}>
                  <TableCell component="th" scope="row">
                    {row.municipality}
                  </TableCell>
                  <TableCell align="center">{row.cases}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default LandingView;
