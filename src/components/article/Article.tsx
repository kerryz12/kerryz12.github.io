import "./article.css"

const Article = ({imgUrl, date, company, title, body} : {imgUrl:any, date:any, company:any, title:any, body:any}) => {
    return (
        <div className="portfolio-container_article">
            <div className="portfolio-container_article-image">
                <img src={imgUrl} alt="image" />
            </div>
            <div className="portfolio-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{company}</h3>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            </div>

        </div>
    )
}

export default Article;