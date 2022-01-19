import Post from "./components/post.components";

const Posts = (props) => {
  const { handlelike, Posts, handleremove } = props;
  return (
    <>
      <div className="container mainContent">
        {Posts.map((value) => {
          return (
            <Post
              islike={value.islike}
              title={value.title}
              date={value.date}
              description={value.description}
              key={value.id}
              id={value.id}
              handlelike={handlelike}
              handleremove={handleremove}
            />
          );
        })}
      </div>
    </>
  );
};

export default Posts;
