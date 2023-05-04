import Header from "@/components/Header";
import Image from "next/image";
const getData = async(blogId) => {
    const result = await  fetch(`https://swanky-api.onrender.com/posts/${blogId}`, { next: { revalidate: 30 } })
    if(!result.ok) {throw new Error("failed to fetch data");}
    return result.json()
  }
  
  const BlogDetails = async({params: {blogId}}) => {
      const blog =  await getData(blogId)
      return ( <>
        <Header></Header>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <h1>{blog.title}</h1>
              <p>{blog.subtitle}</p>
              <p>{blog.text}</p>
          </main></>
       );
  }
   
  export default BlogDetails;