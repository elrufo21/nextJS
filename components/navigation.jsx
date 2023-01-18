import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        >OOOO</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/" className="nav-link active" aria-current="page">
              Index
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
