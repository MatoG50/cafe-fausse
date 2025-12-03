const Menu = () => {
  const menuData = [
    {
      category: "Starters",
      items: [
        {
          name: "Bruschetta",
          description:
            "Fresh tomatoes, basil, olive oil, and toasted baguette slices",
          price: "$8.50",
        },
        {
          name: "Caesar Salad",
          description: "Crisp romaine with homemade Caesar dressing",
          price: "$9.00",
        },
      ],
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Grilled Salmon",
          description: "Served with lemon butter sauce and seasonal vegetables",
          price: "$22.00",
        },
        {
          name: "Ribeye Steak",
          description: "12 oz prime cut with garlic mashed potatoes",
          price: "$28.00",
        },
        {
          name: "Vegetable Risotto",
          description: "Creamy Arborio rice with wild mushrooms",
          price: "$18.00",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with mascarpone",
          price: "$7.50",
        },
        {
          name: "Cheesecake",
          description: "Creamy cheesecake with berry compote",
          price: "$7.00",
        },
      ],
    },
    {
      category: "Beverages",
      items: [
        {
          name: "Red Wine (Glass)",
          description: "A selection of Italian reds",
          price: "$10.00",
        },
        {
          name: "White Wine (Glass)",
          description: "Crisp and refreshing",
          price: "$9.00",
        },
        {
          name: "Craft Beer",
          description: "Local artisan brews",
          price: "$6.00",
        },
        {
          name: "Espresso",
          description: "Strong and aromatic",
          price: "$3.00",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>

      {menuData.map(category => (
        <div key={category.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="space-y-4">
            {category.items.map(item => (
              <div
                key={item.name}
                className="flex justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <div className="font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
