import Link from "next/link";

const Card = ({ post }) => {
  return (
    <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-500 focus:text-blue-500">
      <Link href="/blog/[id]" as={`/blog/post/{post.id}`}>
        <a>
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="mt-4 text-xl">{post.description}</p>
        </a>
      </Link>
    </div>
  );
};

export default Card;
