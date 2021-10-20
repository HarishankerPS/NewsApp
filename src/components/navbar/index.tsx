import { Grid } from "@mui/material";
import React from "react";

const Nav: React.FC = (props) => {
  return (
    <div>
      <Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: "black",
            color: "#fff",
            mt: 2,
            ml: "350px",
            p: 2,
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          Top 10 Headlines today
        </Grid>
      </Grid>
    </div>
  );
};
export default Nav;
