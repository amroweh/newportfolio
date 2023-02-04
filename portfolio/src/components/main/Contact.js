import '../../CSS/contact.css'

const Contact = () => {
  return (
    <section id="contact" className="container">
        <h1>Contact Me.</h1>
        <form action="">
            <label for="">Name</label>
            <input type="text" /><br />
            <label for="">Email</label>
            <input type="email" /><br />
            <label for="">Message</label>
            <textarea name="" id="" cols="30" rows="10" />    
            <button class="btn" type="submit">Send &#8594;</button>    
        </form>
    </section>
  )
}

export default Contact
