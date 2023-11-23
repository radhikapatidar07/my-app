import { Link, Outlet } from "react-router-dom";
function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Here We are going to mention our contact page</p>
      <Link to="/company">Company</Link>
      <br />
      <Link to="/channel">Channel</Link>
      <br />
      <Link to="/other">Other</Link>
      <Outlet />
    </div>
  );
}
export default Contact;
