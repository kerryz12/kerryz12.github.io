import "./portfolio.css"
import { Article } from '../../components'
import { tech } from './imports'

const Portfolio = () => {
    return (
        <div className="portfolio section__padding">
            <div className="portfolio-heading-1" id="portfolio">
                <h1 className="gradient__text">
                    you can find my portfolio below.
                </h1>
                <h1>
                    work experience
                </h1>
            </div>
            <div className="portfolio-container-1">
                <div className="portfolio-container_group-1">
                    <Article imgUrl={tech} date="January - August 2022" company="Solidigm" title="Firmware Engineer Coop" body="Cras pretium libero aliquam eros feugiat, ac efficitur dolor commodo. Duis imperdiet egestas molestie. Phasellus porta, diam quis consectetur condimentum, mi quam hendrerit ligula, at iaculis massa quam vel augue. " />
                    <Article imgUrl={tech} date="September - December 2022" company="Brave Technology" title="Firmware Engineer Coop" body="Nulla facilisi. Maecenas odio est, tristique in tortor a, mattis faucibus mauris. Phasellus volutpat, dolor nec pharetra ornare, magna eros blandit augue, sed feugiat enim tellus in mauris." />
                </div>
            </div>

            <div className="portfolio-heading-2">
                <h1>
                    projects
                </h1>
            </div>
            <div className="portfolio-container-2">
                <div className="portfolio-container_group-2">
                    <Article imgUrl={tech} date="January 2023" company = "UBC" title="Student" body="Sed venenatis eleifend felis non interdum. Praesent luctus semper orci, sed fermentum massa fermentum quis. Integer eu dignissim lorem." />
                    <Article imgUrl={tech} date="February 2023" company = "UBC" title="Student" body="Sed venenatis eleifend felis non interdum. Praesent luctus semper orci, sed fermentum massa fermentum quis. Integer eu dignissim lorem." />
                    <Article imgUrl={tech} date="March 2023" company = "UBC" title="Student" body="Sed venenatis eleifend felis non interdum. Praesent luctus semper orci, sed fermentum massa fermentum quis. Integer eu dignissim lorem." />
                    <Article imgUrl={tech} date="April 2023" company = "UBC" title="Student" body="Sed venenatis eleifend felis non interdum. Praesent luctus semper orci, sed fermentum massa fermentum quis. Integer eu dignissim lorem." />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;