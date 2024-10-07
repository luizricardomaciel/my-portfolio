import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/fotoEu.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));
  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <div>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Luiz Ricardo M.
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Desenvolvedor FrontEnd
              </Typography>
              <Grid container display={"flex"} justifyContent={"center"}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Button>
                    <DownloadIcon />
                    Resumo
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Button>
                    <ForwardToInboxIcon /> Contatar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </div>
  );
};

export default Hero;
