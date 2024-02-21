'use client'
import { useEffect } from "react";
import Header from "../components/Header";

export default function Post({params}) {
  const link = "https://www.nytimes.com/" + params.link.join('/') + ".html";

  useEffect(() => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'Accept': '*/*',
      },
    };

    fetch(link, fetchOptions).then((resp) => {
      console.log(resp);
    });
  }, [link]);

  return (
    <div>
      <Header></Header>
    </div>
  );
}
