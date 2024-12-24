'use client'
import React, { useState } from 'react';
import styles from '../styles/FeaturedProducts.module.css';

const FeaturedProducts = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState(products[0]);

  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.title}>Explore Our Collections</h2>
      <div className={styles.tabContainer}>
        {products.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category)}
            className={`${styles.tabButton} ${
              activeCategory.id === category.id ? styles.activeTab : ''
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <CategorySlider category={activeCategory} />
    </section>
  );
};

const CategorySlider = ({ category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? category.images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === category.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.sliderSection}>
      <h3 className={styles.categoryTitle}>{category.name}</h3>
      <div className={styles.slider}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          &lt;
        </button>
        <div className={styles.imageContainer}>
          <img
            src={category.images[currentIndex]}
            alt={`${category.name} ${currentIndex + 1}`}
            className={styles.sliderImage}
          />
        </div>
        <button className={styles.arrowButton} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
