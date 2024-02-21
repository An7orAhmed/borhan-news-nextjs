import Image from "next/image";
import Link from "next/link";

function Article({ data }) {
  const {title, abstract, published_date, multimedia, url, geo_facet, byline} = data;
  const link = url.replace("https://www.nytimes.com/", "").replace(".html", "");
  if(!title || !abstract || !url) return;

  let imgAlt, imgSrc;
  if(multimedia && multimedia.length > 0) {
    imgAlt = multimedia[0].caption;
    imgSrc = multimedia[0].url;
  }
  
  return (
    <Link href={`/${link}`}>
      <div className="card border-[1px] h-full hover:shadow-lg">
        <Image alt={imgAlt} src={imgSrc} width='300' height='200' className="w-full h-56 rounded-t-2xl" />
        <div className="p-4">
          <p className="font-light text-sm pb-2 text-gray-500">Published: {published_date}</p>
          <h1 className="font-bold pb-3">{title}</h1>
          <p className="pb-3">{abstract}</p>
          <div className="flex flex-wrap gap-3 pb-3">
            {
              geo_facet.map((fact, i) => <div key={i} className="badge badge-primary badge-outline">{fact}</div>)
            }
          </div>
          <p className="text-secondary font-light text-sm pb-3">{byline}</p>
        </div>
      </div>
    </Link>
  );
}

export default Article;