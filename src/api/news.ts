import { newsApiInstance } from "./instance";
import React from "react";

const API_KEY = "daa43e4c71064a01831d6e930c78fbfe";

export interface GetNewsInfoByQueryResponse {
  status: string;
  totalResults: number;
  articles: [
    {
      source: {
        id: null | number | string;
        name: string;
      };
      author: string;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  ];
}

export async function getNewsInfoByQuery(q: "all" | string) {
  const { data } = await newsApiInstance.get(
    `/everything?q=${q}&pageSize=10&apiKey=${API_KEY}`
  );
  return data as GetNewsInfoByQueryResponse;
}
