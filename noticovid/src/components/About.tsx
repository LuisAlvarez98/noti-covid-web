import "../App.css";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Jesus from "../img/jesus.png";
import Andrea from "../img/andrea.png";
import Luis from "../img/avatar.jpg";
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
        </p>
        <p> Curabitur bibendum eros quis tortor bibendum rutrum.</p>
        <p> porttitor orci, a faucibus tortor sollicitudin vitae.</p>

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
            <p>Programador</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar src={Andrea} style={{ width: 128, height: 128 }} />
            <NameText>Andrea</NameText>
            <p>Programadora</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar src={Luis} style={{ width: 128, height: 128 }} />
            <NameText>Luis F. Alvarez</NameText>
            <p>Programador</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar src={Jesus} style={{ width: 128, height: 128 }} />
            <NameText>Jesus</NameText>
            <p>Programador</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar src={Jesus} style={{ width: 128, height: 128 }} />
            <NameText>Jesus</NameText>
            <p>Programador</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
