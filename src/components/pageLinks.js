const links = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
function Links({parentClass,itemClass}) {
  return (
      <ul  className={parentClass}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
  );
}

export default Links;