import Card from "./Card";

const cardGrid = ({ posts }) => {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      {posts.map((post) => (
        <Card post={post} key={post.id} />
      ))}
    </div>
  );
};

export default cardGrid;
