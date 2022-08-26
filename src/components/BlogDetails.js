import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  const handleClickedit = () => {
    // fetch("http://localhost:8000/blogs/" + blog.id, {
    //   method: "put",
    // }).then(() => {
    //   navigate("/");
    // });
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    }).then(() => {});
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
        <button style={{ marginLeft: "10px" }} onClick={handleClickedit}>
          Edit
        </button>
      </article>
    </div>
  );
};

export default BlogDetails;
