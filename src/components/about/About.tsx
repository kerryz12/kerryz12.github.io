import "./about.css";
import { Feature } from '../../components'

function About() {
    return (
        <div className="about section__margin" id="about">
            <div className="about-feature">
                <Feature title="about me" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat commodo ullamcorper. Pellentesque ex quam, blandit in metus a, tempus tincidunt nisl. Maecenas sed purus purus. Nullam efficitur laoreet aliquam. Etiam euismod tempus mauris, ut venenatis risus. Duis auctor ac augue eget eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas non malesuada tortor. Donec orci metus, rutrum sit amet pellentesque vel, mattis posuere magna." />
            </div>
            <div className="about-container">
                <Feature title="skills" text="Donec at erat eu nulla auctor pulvinar at eget odio. Morbi molestie metus sit amet tempor ultrices. Nullam egestas non neque ac cursus. Nam at fringilla eros, ut vulputate eros." />
                <Feature title="education" text="Nulla sodales mauris a dapibus ultricies. Morbi hendrerit mi sed ipsum sagittis varius. Proin tincidunt, mi et sollicitudin gravida, nisl quam suscipit enim, vitae imperdiet sapien metus vitae tortor." />
                <Feature title="interests" text="Vivamus rhoncus arcu libero, ac tincidunt justo volutpat quis. Nullam id erat sit amet libero convallis efficitur et vel felis." />
            </div>
        </div>
    )
}

export default About;