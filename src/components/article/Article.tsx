import "./article.css"

const Article = ({url, imgUrl, date, company, title, body} : {url:any, imgUrl:any, date:any, company:any, title:any, body:any}) => {
    return (
        <div className="portfolio-container_article">
            <div className="portfolio-container_article-image">
                <a href={url}><img src={imgUrl} alt="link to the project!" /></a>
            </div>
            <div className="portfolio-container_article-content">
                <div>
                    <p>{date}</p>
                    <h2>{company}</h2>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            </div>

        </div>
    )
}

export default Article;