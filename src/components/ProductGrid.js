import React from 'react';
function ProductsGrid() {
    const cell =
        <div>
            <h3>"product.name</h3>
            <img></img>
            <label>eur "product.price" <p/></label>
            <button>
                <div>i</div>
            </button>
            <button>Add to Cart</button>
        </div>

    return (
        <div>
            {cell}
        </div>
    );
}

export default ProductsGrid