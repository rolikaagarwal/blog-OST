import Article from "./Article";
import { ReactElement } from "react";

const Blog: React.FC = (): ReactElement => {
  return (
    <>
      <h1 className="heading">Blog Page </h1>
      <div className="main-article">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </>
  );
};

export default Blog;
