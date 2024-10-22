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
    <article className="work-container_article">
      <div className="work-container_article-content">
        <p className="date">{date}</p>
        <h3 className="company">{company}</h3>
        <h2 className="title">{title}</h2>
        <p className="body">{body}</p>
      </div>
    </article>
  );
};

export default Work;
