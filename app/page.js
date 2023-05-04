import Image from 'next/image'
import Header from '@/components/Header'
import orangebeanie from '/public/orangebeanie.jpg'
const getProducts = async() =>{
  const result = await fetch("https://swanky-api.onrender.com/products")
  if(!result.ok) {throw new Error("failed to fetch data");}
  return result.json()
}
const getOffers = async() =>{
  const result = await fetch("https://swanky-api.onrender.com/offers")
  if(!result.ok) {throw new Error("failed to fetch data");}
  return result.json()
}
const getStarted = async() =>{
  const result = await fetch("https://swanky-api.onrender.com/started")
  if(!result.ok) {throw new Error("failed to fetch data");}
  return result.json()
}

const Home = async() => {
const products =  await getProducts();
const offers = await getOffers()
const started = await getStarted()

console.log(started)
  return ( 
    <>
    <Header></Header>
    <main className=" flex min-h-screen flex-col items-center justify-between">
<Image src={orangebeanie} className=" relative w-[1920px] h-[826px]  pb-20" ></Image>  
<ul className='absolute pt-[15rem] w-[40rem] text-white'>
    {offers.map((offer, index)  => index < 1 ? (
      <li>
<h1 className='text-center text-[4.5rem]'>{offer.headline}</h1>
<p>{offer.text}</p>
<button className=' bg-black text-white w-[5.5rem] h-[2rem]'>Shop now</button>
</li>
                ):null )}
                
                </ul>
                <div>
                <h2 className='font-bold text-3xl text-center'>Our products</h2>
      <ul className='flex'>
        
    {products.map(product =>(
      <li className=' flex flex-col m-10'>
        <img src="https://picsum.photos/650/650?random=1"></img>
<p>{product.name}</p>
<p>${product.price}</p>
</li>
                ))}</ul></div>
    
                <h2>{started.headline}</h2>
                <p>{started.text}</p>
                <ul>
    {started.bullets.map(bullet =>(
      <li>
<p>{bullet.icon}{bullet.name}</p>
<p>{bullet.text}</p>
</li>
                ))}</ul>
    </main>
    </>
  )
}

export default Home;