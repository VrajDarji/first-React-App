


const llinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.github.com", icon: "fab fa-github" },
];
function Slinks({parentClass,itemClass}) {
  return (
      <ul className={parentClass}>
        {llinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
  );
}

export default Slinks;
