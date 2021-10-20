import { Button, Grid } from "@mui/material";
import { queryHelpers } from "@testing-library/dom";
import React, { useCallback, useState } from 'react';


interface category{
eventClick?: (q:string | "all")=>void;
}



const NewsButtons: React.FC<category> = (props) => {
 let {eventClick} = props;
 const [query,setQuery]=useState("");
   const onClick = ()=>(eventClick ? eventClick(query) :null)
    // useCallback(()=>{if(eventClick) { eventClick(query)}},[eventClick,query]);
console.log(query)
 return (
    <div>
      <Grid
        xs={6}
        container
        sx={{
          bgcolor: "#fff",
          border: "2px solid black",
          mt: 125,
          ml: "350px",
        
          p: 2,
          textAlign: "center",
          fontSize: "2rem",
          
          
        }}
      >
        <Grid item >
          <Button variant="contained" sx={{ ml: 2, bgcolor: "#AC193D" }} onMouseDown={()=>setQuery("business")} onMouseUp={onClick}  >
            Business
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ ml: 8, bgcolor: "#AC193D" }} onMouseDown={()=>setQuery("technology")} onMouseUp={onClick} >
            Technology
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ ml: 8, bgcolor: "#AC193D" }} onMouseDown={()=>setQuery("entertainment")} onMouseUp={onClick}>
            Entertainment
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ ml: 8, bgcolor: "#AC193D" }} onMouseDown={()=>setQuery("science")} onMouseUp={onClick}>
            Science
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ ml: 8, bgcolor: "#AC193D" }} onMouseDown={()=>setQuery("all")} onMouseUp={onClick}>
            All
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default NewsButtons;
