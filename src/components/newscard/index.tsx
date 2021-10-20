import React, { useEffect, useState } from "react";
import { Card, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import {  GetNewsInfoByQueryResponse } from "../../api/news";
import { Box } from "@mui/system";


export interface NewsProps {
  currentNews: GetNewsInfoByQueryResponse;
}

const NewsCard: React.FC<NewsProps> = (props) => {
  const { currentNews } = props;
 

  const [query, setQuery] = useState('')

  return (
    <div>
      <Box sx={{
          border: "2px solid black",
          width: "755px",
          ml: "425px",
          mt:1
        }} >
      <div>
    {Object.values(currentNews.articles).map((mappedNews) => (
      <Card
      sx={{ display: "flex", alignItems: "center"}}
      key={mappedNews.urlToImage}
      >
      <CardMedia
      component="img"
      height="100"
      image={mappedNews.urlToImage}
      alt="news"
      />
      <CardContent key={mappedNews.urlToImage} sx={{fontSize:20}}>
      {mappedNews.title}
      <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: "justify" }}
      key={mappedNews.urlToImage}
      >
    {mappedNews.description}
    </Typography>
      </CardContent>
      <CardActions>
    {/* <Button size="small">Share</Button> */}
      <Button size="small" onClick={() => setQuery(mappedNews.url)} >Learn More</Button>
      </CardActions>
      </Card>

    ))}
      </div>
      </Box >
      <div>
       
      <Paper
      sx={{width:"400px", alignItems: "center",ml: "1250px",mt:"-1500px",border:"#fff solid",boxShadow:"none",display: 'flex'}}
      
      key={query}
      >
      <iframe title={query}  src={query} width="700px" height="500px"></iframe>
      </Paper>
      
      </div>
      
    </div>
  );
};
export default NewsCard;
