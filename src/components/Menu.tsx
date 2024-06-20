export const Menu = ({ title, url, teaserText }) => {
  return (
    <li className="p-1 block transform transition-transform duration-300 hover:translate-x-2 hover:text-white">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        {title}
      </a>
      <p>{teaserText}</p>
    </li>
  );
};

export default Menu;
