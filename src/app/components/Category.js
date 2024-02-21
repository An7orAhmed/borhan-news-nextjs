'use client'
import { useEffect, useState } from "react";
import Article from "./Article";

const API_KEY = 'AYqMZGFPLallZJnfDrCt8LRzGrnjv3j2';

export default function Category() {
  const categories = ['home', 'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'politics', 'realestate', 'science', 'sports', 'technology', 'theater', 'travel', 'us', 'world'];
  const [selected, setSelected] = useState('home');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${selected}.json?api-key=${API_KEY}`).then(async (resp) => {
      const json = await resp.json();
      setData(json.results);
      //console.log(json.results);
    });
  }, [selected]);

  const onCategorySelect = (e) => {
    setSelected(e.target.innerText);
  }

  return (
    <div className="px-6 md:px-10 lg:px-32">
      <div className="flex lg:flex-wrap overflow-x-auto gap-3 py-4">
        {
          categories.map((category, i) =>
            <button onClick={onCategorySelect} key={i} className={selected === category ? 'btn btn-primary' : 'btn'}>{category}</button>
          )
        }
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6">
        {
          data.length > 0 ? data.map((data, i) =>
            <Article key={i} data={data}></Article>) :
            <div className="md:col-span-2 lg:col-span-4 text-2xl text-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
        }
      </div>
    </div>
  );
}
