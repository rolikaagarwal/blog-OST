import { Link } from "react-router-dom";

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <>
      <ul className="flex bg-slate-200 justify-end pt-5 pr-5 pb-5 text-lg ">
        <li className="pr-5 cursor-pointer">
          <Link to="/">Blog</Link>
        </li>
        <li className="pr-5 cursor-pointer">
          <Link to="/News">News</Link>
        </li>
        <li className="pr-5 cursor-pointer">
          <Link to="/Events">Events</Link>
        </li>
        <li className="pr-5 cursor-pointer">Jobs</li>
      </ul>
    </>
  );
};
export default Navbar;
