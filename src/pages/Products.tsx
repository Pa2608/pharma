import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import { COMPANY_INFO } from '../utils/constants';
import './Products.css';

interface Product {
    id: string;
    name: string;
    cas: string;
    category: string;
    description: string;
}

const PRODUCTS: Product[] = [
    { id: '1', name: 'Paracetamol API', cas: 'CAS 103-90-2', category: 'APIs', description: 'High-quality paracetamol API with 99.5% purity for pharmaceutical formulations.' },
    { id: '2', name: 'Ascorbic Acid', cas: 'CAS 50-81-7', category: 'Vitamins', description: 'USP grade Vitamin C for pharmaceutical and nutraceutical applications.' },
    { id: '3', name: 'Metformin HCl', cas: 'CAS 1115-70-4', category: 'APIs', description: 'Metformin hydrochloride API for diabetes treatment formulations.' },
    { id: '4', name: 'Ascorbic Acid Tributyrate', cas: 'CAS 7753-52-2', category: 'Vitamins', description: 'Stable form of Vitamin C for extended-release formulations.' },
    { id: '5', name: 'Ibuprofen BP/USP', cas: 'CAS 15687-27-1', category: 'APIs', description: 'Non-steroidal anti-inflammatory drug API meeting BP and USP standards.' },
    { id: '6', name: 'Citric Acid Anhydrous', cas: 'CAS 77-92-9', category: 'Excipients', description: 'Food and pharmaceutical grade citric acid for various applications.' },
    { id: '7', name: 'Amoxicillin Trihydrate', cas: 'CAS 61336-70-7', category: 'APIs', description: 'Beta-lactam antibiotic API for bacterial infection treatment.' },
    { id: '8', name: 'Vitamin D3', cas: 'CAS 67-97-0', category: 'Vitamins', description: 'Cholecalciferol for bone health and immune support formulations.' },
    { id: '9', name: 'Microcrystalline Cellulose', cas: 'CAS 9004-34-6', category: 'Excipients', description: 'Pharmaceutical excipient for tablet binding and disintegration.' },
];

const CATEGORIES = ['All', 'APIs', 'Chemicals', 'Vitamins', 'Excipients'];

const Products: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter products
    const filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.cas.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="products-page">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="products-hero">
                    <div className="container">
                        <h1>Our Products</h1>
                        <p>Quality pharma APIs, excipients, vitamins, and chemicals. Browse our extensive catalog of pharmaceutical raw materials.</p>
                    </div>
                </section>

                {/* Category Icons */}
                <section className="category-icons">
                    <div className="container">
                        <div className="category-icon-grid">
                            <div className="category-icon-item">
                                <div className="category-icon-circle">
                                    <Icon name="flask" size={24} color="var(--primary-blue)" />
                                </div>
                                <span>APIs</span>
                            </div>
                            <div className="category-icon-item">
                                <div className="category-icon-circle">
                                    <Icon name="beaker" size={24} color="var(--primary-blue)" />
                                </div>
                                <span>Chemicals</span>
                            </div>
                            <div className="category-icon-item">
                                <div className="category-icon-circle">
                                    <Icon name="pill" size={24} color="var(--primary-blue)" />
                                </div>
                                <span>Vitamins</span>
                            </div>
                            <div className="category-icon-item">
                                <div className="category-icon-circle">
                                    <Icon name="shield" size={24} color="var(--primary-blue)" />
                                </div>
                                <span>Excipients</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Catalog */}
                <section className="products-catalog section">
                    <div className="container">
                        <div className="catalog-layout">
                            {/* Sidebar Filters */}
                            <aside className="catalog-sidebar">
                                <h3>Filters</h3>

                                <div className="filter-group">
                                    <h4>Categories</h4>
                                    <div className="filter-options">
                                        {CATEGORIES.map(category => (
                                            <label key={category} className="filter-checkbox">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    checked={selectedCategory === category}
                                                    onChange={() => {
                                                        setSelectedCategory(category);
                                                        setCurrentPage(1);
                                                    }}
                                                />
                                                <span>{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="filter-group">
                                    <h4>Pharmaceutical Grades</h4>
                                    <div className="filter-options">
                                        <label className="filter-checkbox">
                                            <input type="checkbox" />
                                            <span>USP</span>
                                        </label>
                                        <label className="filter-checkbox">
                                            <input type="checkbox" />
                                            <span>BP</span>
                                        </label>
                                        <label className="filter-checkbox">
                                            <input type="checkbox" />
                                            <span>EP</span>
                                        </label>
                                        <label className="filter-checkbox">
                                            <input type="checkbox" />
                                            <span>IP</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="filter-group">
                                    <h4>Stock Status</h4>
                                    <div className="filter-options">
                                        <label className="filter-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <span>In Stock</span>
                                        </label>
                                        <label className="filter-checkbox">
                                            <input type="checkbox" />
                                            <span>Pre-Order</span>
                                        </label>
                                    </div>
                                </div>
                            </aside>

                            {/* Main Content */}
                            <div className="catalog-main">
                                {/* Search and Results */}
                                <div className="catalog-header">
                                    <div className="search-bar">
                                        <input
                                            type="text"
                                            placeholder="Search by name, CAS or chemical name..."
                                            value={searchQuery}
                                            onChange={(e) => {
                                                setSearchQuery(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                        />
                                        <button className="search-btn">Search</button>
                                    </div>
                                    <div className="results-info">
                                        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} Products
                                    </div>
                                </div>

                                {/* Product Grid */}
                                <div className="product-grid">
                                    {paginatedProducts.map(product => (
                                        <div key={product.id} className="product-card">
                                            <div className="product-category-badge">{product.category}</div>
                                            <h3 className="product-name">{product.name}</h3>
                                            <p className="product-cas">{product.cas}</p>
                                            <p className="product-description">{product.description}</p>
                                            <div className="product-actions">
                                                <Button variant="primary" size="sm">Request Quote</Button>
                                                <button className="btn-link">View Details</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="pagination">
                                        <button
                                            className="pagination-btn"
                                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                            disabled={currentPage === 1}
                                        >
                                            Previous
                                        </button>

                                        <div className="pagination-numbers">
                                            {[...Array(totalPages)].map((_, index) => (
                                                <button
                                                    key={index + 1}
                                                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                                                    onClick={() => setCurrentPage(index + 1)}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))}
                                        </div>

                                        <button
                                            className="pagination-btn"
                                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                            disabled={currentPage === totalPages}
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="products-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Need Reliable Pharma Raw Materials?</h2>
                            <p>Can't find what you're looking for? We can source custom pharmaceutical raw materials. Contact us for competitive pricing and availability.</p>
                            <div className="cta-buttons">
                                <Button variant="secondary" size="lg">Request Quote</Button>
                                <Button variant="outline" size="lg">Download Catalog</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton phoneNumber={COMPANY_INFO.phone} />
        </div>
    );
};

export default Products;
