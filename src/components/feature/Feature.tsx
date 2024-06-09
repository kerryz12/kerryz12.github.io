import "./feature.css"

const Feature = ({title, text} : {title:any, text:any}) => {
    return (
        <div className="features-container__feature">
            <div className="features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>

            <div className="features-container__feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature;