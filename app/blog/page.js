import Link from 'next/link';
import Header from '@/components/Header'
const getBlog = async() =>{
  const result = await fetch("https://swanky-api.onrender.com/posts", { next: { revalidate: 0 } } /*andet måde ville være  {cache: 'no-store'}*/)
  if(!result.ok) {throw new Error("failed to fetch data");}
  return result.json()
}

const Blog = async() => {
    const blog =  await getBlog();
console.log(blog)

  return ( 
    <>
    <Header></Header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    <ul className='flex flex-col'>
      
    {blog.map(blogs =>( 
  
      <li className=' flex flex-row m-10' >  <Link href={`/blog/${blogs.id}`}> 
       <img src="https://picsum.photos/1050/650?random=1"></img>
<h1 className=' text-2xl font-bold'>{blogs.title}</h1>

       
<p>{blogs.subtitle}</p></Link>
</li>
                ))}</ul>
    </main>
    </>
  )
}

export default Blog;