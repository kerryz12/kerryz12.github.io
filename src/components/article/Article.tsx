import "./article.css";

const Article = ({
  url,
  imgUrl,
  date,
  company,
  title,
  body,
}: {
  url: any;
  imgUrl: any;
  date: any;
  company: any;
  title: any;
  body: any;
}) => {
  return (
    <div className="portfolio-container_article">
      <div className="portfolio-container_article-image">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt="link to the project!" />
        </a>
      </div>
      <div className="portfolio-container_article-content">
        <p className="date">{date}</p>
        <h2 className="company">{company}</h2>
        <h3 className="title">{title}</h3>
        <p className="body">{body}</p>
      </div>
    </div>
  );
};

export default Article;
