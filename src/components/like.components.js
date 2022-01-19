const Like = (props) => {
  const { islike: like, id, handlelike } = props;

  const clicklike = () => {
    if (like === 1) {
      handlelike(id, 0);
    } else {
      handlelike(id, 1);
    }
    // this.setState({ like: !this.state.like });
    // console.log(this.props.handlelike);
  };

  return (
    <button
      onClick={clicklike}
      className={"btn " + (like === 1 ? "btn-primary" : "btn-light")}
    >
      <i className="fa fa-thumbs-up"></i>
    </button>
  );
};

export default Like;
