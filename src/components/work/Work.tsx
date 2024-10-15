import "./work.css";

const Work = ({
  date,
  company,
  title,
  body,
}: {
  date: any;
  company: any;
  title: any;
  body: any;
}) => {
  return (
    <div className="portfolio-container_article">
      <div className="portfolio-container_article-content">
        <div>
          <p>{date}</p>
          <h2>{company}</h2>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
