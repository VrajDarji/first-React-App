import Title from "./Title";

const services = [
  {
    icon: "fas fa-wallet fa-fw",
    title: "Saving Money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laborum!",
  },
  {
    icon: "fas fa-tree fa-fw",
    title: "Endles Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laborum!",
  },
  {
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laborum!",
  },
];

const Service = ({ icon, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="sevice-text">{text}</p>
      </div>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" className="section services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service)=>{
            return <Service {...service} key={service.id}/>
        })}
      </div>
    </section>
  );
};

export default Services;
