import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './ProductCard.css'; // for optional styling overrides

function ProductCard({ image, title, status, isOutOfStock }) {
  return (
    <div className=" mb-4">
        <div className="card border-0 text-center position-relative">
            {status && (
            <span className="position-absolute top-0 start-0 bg-white px-2 py-1 text-uppercase small fw-bold">
                {status}
            </span>
            )}
            {isOutOfStock && (
            <div className="position-absolute top-50 start-50 translate-middle text-center bg-white px-2 py-1 fw-bold">
                OUT OF STOCK
            </div>
            )}

            <img
                src={image}
                className="card-img-top object-fit-contain"
                alt={title}
                style={{ height: '200px', objectFit: 'contain' }}
            />

            <div className="card-body px-0 pt-2 pb-0 text-start">
            {/* Title */}
            <h6 className="mb-1 fw-bold text-truncate">
                {title}
            </h6>

            {/* Subtext + heart icon in same line with proper alignment */}
            <div className="d-flex justify-content-between align-items-center">
                <span className="small text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <a href="#" className="text-decoration-none text-muted">Sign in</a> or Create an account to see pricing
                </span>
                <FaHeart className="text-muted ms-2 flex-shrink-0" />
            </div>
            </div>

        </div>
    </div>
  );
}

export default ProductCard;
