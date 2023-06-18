import "./Article.css"; 
import image from "../images/article.jpg";
const Article = () => {
  return (
    <div className="article">
      <div className="image-container">
        <img src={image} alt="Article Image" className="article-image" />
      </div>
      <div className="content">
        <h2 className="title"> Title</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
          diam ac est sagittis tempor. Donec dictum bibendum magna, non
          efficitur orci varius vel. Phasellus in orci sed dolor consectetur
          lacinia. Suspendisse tristique cursus malesuada. Quisque ac turpis
          sapien. Nunc ultrices lobortis nisi, vel ultrices mi fermentum at.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default Article;
