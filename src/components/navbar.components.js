const Navbar = (props) => {
  const { countLikeDislike } = props;
  return (
    <nav className="navbar navbar-light bg-light nav-box">
      <div className="navbar-brand mx-3">
        <span className="badge bg-primary">Hello facebook</span>
      </div>

      <p className="m-2">
        Like: <span className="badge bg-primary">{countLikeDislike()[0]}</span>{" "}
        Dislike:
        <span className="badge bg-primary">{countLikeDislike()[1]}</span>{" "}
      </p>
    </nav>
  );
};

export default Navbar;
