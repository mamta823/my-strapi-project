import Image from "next/image";

const posts=[
  {
    id:1,
    title:"Post 1",
    content:"This is post 1"
  },
  {
    id:2,
    title:"Post 2",
    content:"This is post 2"
  },
  {
    id:3,
    title:"Post 3",
    content:"This is post 3"
  }
]
export  default async function Home() {
  const res = await fetch(`https://my-strapi-project-ibk1.vercel.app/posts`);
    console.log('response',res);
    const posts = await res.json();
    console.log('podsfdsfdsdfdsfdsts======',posts);

  return (
    <div>
    {
    posts?.data ?
    posts?.data?.map((post:any) => (
      <article key={post.id}>
        <h2>{post.attributes.title}</h2>
        <p>{post.attributes.content}</p>
      </article>
    ))
    :
  "No data found"}
  </div>
  );
}
