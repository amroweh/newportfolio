import '../../CSS/header.css'

const Header = () => {
  return (
    <header className="container">
        <nav>
            <a id="menuToggle">menu &#8594;</a>             
            <ul id="navigationMenu">
                <li><a href="#">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>                
            </ul>
        </nav>
    </header>
  )
}

export default Header
