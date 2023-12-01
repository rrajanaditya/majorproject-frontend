import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-orange-400 text-violet-50 h-20 flex items-center justify-center">
      <nav className="container mx-auto px-10  sm:flex-row flex-col  flex justify-between items-center">
        <div className="nav-left">
          <Link to={"/home"}>
            <h2 className="brand text-2xl text-violet-50 font-semibold  ">
              GO <span className="text-white-500">LAPTOPS</span>
            </h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
