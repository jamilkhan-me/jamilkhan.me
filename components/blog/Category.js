function Category({ category }) {
  return (
    <div className="flex flex-row justify-between my-2 hover:text-blue-600 cursor-pointer">
      <h1 className="font-semibold">{category.name}</h1>
      <p>5 </p>
    </div>
  );
}

export default Category;
