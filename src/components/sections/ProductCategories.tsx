import React from 'react';
import Card from '../ui/Card';
import type { Category } from '../../types';
import './ProductCategories.css';

interface ProductCategoriesProps {
    categories: Category[];
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({ categories }) => {
    return (
        <section className="product-categories section">
            <div className="container">
                <h2 className="section-title">Product Categories</h2>
                <p className="section-subtitle">
                    Comprehensive range of pharmaceutical raw materials and chemicals
                </p>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <Card
                            key={category.id}
                            icon={category.icon}
                            title={category.title}
                            description={category.description}
                            link={category.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
