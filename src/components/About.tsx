import "../App.css";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Jesus from "../img/jesus.png";
import Andrea from "../img/andrea.png";
import Luis from "../img/avatar.jpg";
//@ts-ignore
import Kevin from "../img/kevin.PNG";
import Javier from "../img/javier.jpg";
const Container = styled.div`
  padding: 32px;
`;

const Avatar = styled.img`
  border-radius: 64px;
`;

const NameText = styled.p`
  font-weight: bold;
`;

const About = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <h1>Sobre nosotros</h1>
        <p>
          Somos el equipo 3 de la clase de Evaluación y Administración de
          Proyectos
        </p>
        <p> Este proyecto fue creado con el objetivo </p>
        <p> de informar a la gente en NL sobre el COVID 19</p>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          alignContent="center"
          style={{ marginTop: "64px" }}
        >
          <Grid item xs={12} md={4}>
            <Avatar src={Jesus} style={{ width: 128, height: 128 }} />
            <NameText>Jesus</NameText>
            <p>Administrador</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar src={Andrea} style={{ width: 128, height: 128 }} />
            <NameText>Andrea</NameText>
            <p>Administradora</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar src={Luis} style={{ width: 128, height: 128 }} />
            <NameText>Luis F. Alvarez</NameText>
            <p>Programador</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar src={Javier} style={{ width: 128, height: 128 }} />
            <NameText>Jesus</NameText>
            <p>Programador</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar src={Kevin} style={{ width: 128, height: 128 }} />
            <NameText>Jesus</NameText>
            <p>Programador</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
