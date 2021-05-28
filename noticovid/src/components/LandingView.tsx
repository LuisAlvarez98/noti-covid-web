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
import { useEffect, useState } from "react";
import axios from "axios";

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

interface MunicipioType {
  municipio: string;
  confirmados: string;
  defunciones: string;
  sospechosos: string;
}
function createData(municipality: string, cases: number) {
  return { municipality, cases };
}

const LandingView = () => {
  const classes = useStyles();
  const [listaDatosMunicipios, setListaDatosMunicipios] = useState<
    MunicipioType[]
  >([]);
  const [datosGenerales, setDatosGenerales] = useState({
    confirmados: "",
    defunciones: "",
    sospechosos: "",
    negativos: "",
    activos: "",
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://noticovid.herokuapp.com/api/data")
      .then((response) => {
        setDatosGenerales(response.data.data.datosGenerales);
        setListaDatosMunicipios(response.data.data.listaDatosMunicipios);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rows = [
    createData("Monterrey", 159),
    createData("Guadalupe", 237),
    createData("Apodaca", 262),
    createData("San Nicolas", 305),
    createData("Escobedo", 356),
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <div>
          <h1>Casos COVID19 en Nuevo León</h1>
          <h2>Casos totales:</h2>
          <TotalCasesText>{datosGenerales.confirmados}</TotalCasesText>
        </div>
        <Grid container>
          <Grid item xs={12} md={3}>
            <h4>Casos activos:</h4>
            <ActiveCasesText>{datosGenerales.activos}</ActiveCasesText>
          </Grid>
          <Grid item xs={12} md={3}>
            <h4>Negativos:</h4>
            <RecoveredText>{datosGenerales.negativos}</RecoveredText>
          </Grid>
          <Grid item xs={12} md={3}>
            <h4>Defunciones:</h4>
            <DeathsText>{datosGenerales.defunciones}</DeathsText>
          </Grid>
          <Grid item xs={12} md={3}>
            <h4>Sospechosos:</h4>
            <DeathsText>{datosGenerales.sospechosos}</DeathsText>
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
                <TableCell align="center">Confirmados</TableCell>
                <TableCell align="center">Defunciones</TableCell>
                <TableCell align="center">Sospechosos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listaDatosMunicipios.map((mun: MunicipioType) => (
                <TableRow key={mun.municipio}>
                  <TableCell component="th" scope="row">
                    {mun.municipio}
                  </TableCell>
                  <TableCell align="center">{mun.confirmados}</TableCell>
                  <TableCell align="center">{mun.defunciones}</TableCell>
                  <TableCell align="center">{mun.sospechosos}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <p>
        Fuente:{" "}
        <a
          href="http://www.gncys.com/covid19/covid19-estados.aspx?edoId=NL"
          target="_new"
        >
          http://www.gncys.com/covid19/covid19-estados.aspx?edoId=NL
        </a>{" "}
      </p>
    </div>
  );
};

export default LandingView;
