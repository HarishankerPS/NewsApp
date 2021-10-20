import React, { useEffect } from "react";
import NewsCard from "../newscard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  currentNewsState,
  fetchNewsDataByQuery,
} from "../../redux/slices/newsSlice";
import NewsButtons from "../footer";

const NewsBox: React.FC = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    
      dispatch(fetchNewsDataByQuery("all"));
    
  }, []);

  const news = useAppSelector((state) => state.news.data);
  return (
    <div>
      <div>
      {news && <NewsCard currentNews={news} />}
       </div>
      <div>
      <NewsButtons  eventClick={(q)=>dispatch(fetchNewsDataByQuery(q))} />
      </div>
    </div>
  );
};
export default NewsBox;
