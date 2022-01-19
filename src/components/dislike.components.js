const Dislike = (props) => {
  const { islike: like, id, handledislike } = props;

  const clickdilike = () => {
    if (like === 2) {
      handledislike(id, 0);
    } else {
      handledislike(id, 2);
    }
    // this.setState({ like: !this.state.like });
    // console.log(this.props.handlelike);
  };

  return (
    <button
      onClick={clickdilike}
      className={"btn " + (like === 2 ? "btn-primary" : "btn-light")}
    >
      <i className="fa fa-thumbs-down"></i>
    </button>
  );
};

export default Dislike;
