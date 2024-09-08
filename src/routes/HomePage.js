import './HomePage.css'
import React from 'react'
import ArticleGroup from '../Home/ArticleGroup'
import TutorialGroup from '../Home/TutorialGroup'
import Footer from '../Home/Footer'
import Subscribe from '../Home/Subscribe'



function HomePage() {
  return (
    <div class="articles-tutorials">
      <img class="back-image" src="deakin.jpg" alt="deakin.jpg" />
      <div class="articles-tutorial-header">
        <h1>Featured Articles</h1>
      </div>
          <ArticleGroup />
      <div class="articles-tutorial-button-div">
        <button type='button' class="articles-tutorials-button">See All Articles</button>
      </div>
      <div class="articles-tutorial-header">
        <h1>Featured Tutorials</h1>
      </div>
      <TutorialGroup />
      <div class="articles-tutorial-button-div">
        <button type='button' class="articles-tutorials-button">See All Tutorials</button>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default HomePage;
