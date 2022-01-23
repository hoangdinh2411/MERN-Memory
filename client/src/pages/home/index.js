import {Container, Grid,Grow } from "@material-ui/core";
import Form from "components/form";
import Posts from "components/posts";
import { useState } from "react";

function Home() {
  const [currentId, setCurrentId] = useState(null);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
