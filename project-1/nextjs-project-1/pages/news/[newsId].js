import { useRouter } from "next/router";

// our-domain.com/news/something-important

import React from "react";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the back-end API
  // to fetch the news item with newsId

  return <h1> The Detail Page</h1>;
};

export default DetailPage;
