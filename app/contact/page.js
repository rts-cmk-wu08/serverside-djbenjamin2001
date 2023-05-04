import Header from "@/components/Header";

const Contact = () => {
   
    return (
        <>
        <Header></Header> 
    <form  method="post">
       <div className="flex flex-col w-[25rem] mt-[15rem] ml-[35rem] items-center gap-2"> 
       <div className="flex flex-row gap-2">
        <label for="name"></label>
  <input className="border-black border" placeholder="write your name here" type="text" id="name" name="name" />
  <label  for="email"></label>
  <input className="border-black border" placeholder="write your email here" type="text" id="email" name="email" /></div>
        <label for="telefon"></label>
  <input className="border-black border" placeholder=" phone number " type="tel" id="telefon" name="telefon" />
  <label  for="subject"></label>
  <input className="border-black border" placeholder="write your subject here" type="text" id="subject" name="subject" />
  <label  for="message"></label>
 <textarea className="border-black border" placeholder="write your message here" name="message" id="message" cols="25" rows="10"></textarea>
  <button type="submit">Submit</button> </div>
  </form> 
  </>);
}
 
export default Contact;