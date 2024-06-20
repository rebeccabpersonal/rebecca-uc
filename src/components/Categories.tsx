import MenuData from "../hooks/MenuData.tsx";

export const Categories = () => {
  const { data, error } = MenuData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Ingen information tillgänglig att visa</div>;
  }

  return (
    <div className="md:w-1/2 w-full p-14 flex flex-col bg-gray-200 md:rounded-l-lg gap-1">
      <h2 id="categories" className="text-2xl font-bold pb-4">
        {data.desktopMenu.category.title}
      </h2>
      {data.desktopMenu.category.menuItems.map((link: any) => (
        <a
          key={link.title}
          href={link.url}
          target="_blank"
          className="block transform transition-transform duration-300 hover:translate-x-2"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Categories;
