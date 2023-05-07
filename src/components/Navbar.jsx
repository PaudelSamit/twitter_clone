const Navbar = () => {
  return (
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li>
                  <form>
                      <input type="text" placeholder="Search twitter..."/>
                  </form>
              </li>
          </ul>
      </nav>
  )
}
export default Navbar;