import img from "../images/about.jpeg";
import Title from "./Title";

function About() {
  return (
    <section id="about" className="section">
      <Title title="about" subtitle="us" />
      <div className="section center about-center">
        <div className="about-img">
          <img src={img} alt="img" className="about-photo" />
        </div>
        <article className="about-info">
          <h3>Explore the Differnce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem
            atque facilis error aperiam ex harum facere vel assumenda nesciunt
            quam ab, maxime accusamus hic dolorem dolore distinctio molestias
            suscipit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            adipisci quibusdam in, porro nobis quam sed quod, amet quas facere
            pariatur dolor vel sit facilis error expedita aperiam! Eum,
            recusandae?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            nisi consequatur soluta tempore modi obcaecati inventore est. Ullam
            at accusamus minus blanditiis ipsum totam est quo, placeat ipsa iure
            eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quia cumque deleniti quisquam ad dignissimos maxime sequi laborum
            mollitia repellat repellendus blanditiis sit, distinctio beatae
            impedit dicta minus doloribus vitae eius!
          </p>
          <a href="#home" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
export default About;
