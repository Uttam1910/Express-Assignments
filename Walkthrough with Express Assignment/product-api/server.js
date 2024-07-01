const http = require('http');

const menProducts = [
    { "id": "1", "name": "Men's T-Shirt", "brand": "ABC", "price": 19.99, "color": "Blue", "size": "M", "category": "Clothing" },
    { "id": "2", "name": "Men's Jeans", "brand": "XYZ", "price": 49.99, "color": "Black", "size": "32", "category": "Clothing" },
    { "id": "3", "name": "Men's Jacket", "brand": "LMN", "price": 79.99, "color": "Green", "size": "L", "category": "Clothing" },
    { "id": "4", "name": "Men's Shoes", "brand": "PQR", "price": 89.99, "color": "Brown", "size": "9", "category": "Footwear" },
    { "id": "5", "name": "Men's Watch", "brand": "DEF", "price": 199.99, "color": "Black", "size": "One Size", "category": "Accessories" },
    { "id": "6", "name": "Men's Belt", "brand": "GHI", "price": 29.99, "color": "Brown", "size": "M", "category": "Accessories" },
    { "id": "7", "name": "Men's Sunglasses", "brand": "JKL", "price": 39.99, "color": "Black", "size": "One Size", "category": "Accessories" },
    { "id": "8", "name": "Men's Hat", "brand": "MNO", "price": 24.99, "color": "Blue", "size": "M", "category": "Accessories" },
    { "id": "9", "name": "Men's Socks", "brand": "PST", "price": 9.99, "color": "White", "size": "M", "category": "Clothing" },
    { "id": "10", "name": "Men's Gloves", "brand": "UVW", "price": 19.99, "color": "Black", "size": "M", "category": "Accessories" }
];

const womenProducts = [
    { "id": "1", "name": "Women's T-Shirt", "brand": "ABC", "price": 19.99, "color": "Red", "size": "S", "category": "Clothing" },
    { "id": "2", "name": "Women's Jeans", "brand": "XYZ", "price": 49.99, "color": "Blue", "size": "28", "category": "Clothing" },
    { "id": "3", "name": "Women's Jacket", "brand": "LMN", "price": 79.99, "color": "Black", "size": "M", "category": "Clothing" },
    { "id": "4", "name": "Women's Shoes", "brand": "PQR", "price": 89.99, "color": "Red", "size": "7", "category": "Footwear" },
    { "id": "5", "name": "Women's Watch", "brand": "DEF", "price": 199.99, "color": "White", "size": "One Size", "category": "Accessories" },
    { "id": "6", "name": "Women's Belt", "brand": "GHI", "price": 29.99, "color": "Black", "size": "S", "category": "Accessories" },
    { "id": "7", "name": "Women's Sunglasses", "brand": "JKL", "price": 39.99, "color": "Brown", "size": "One Size", "category": "Accessories" },
    { "id": "8", "name": "Women's Hat", "brand": "MNO", "price": 24.99, "color": "Pink", "size": "S", "category": "Accessories" },
    { "id": "9", "name": "Women's Socks", "brand": "PST", "price": 9.99, "color": "Black", "size": "S", "category": "Clothing" },
    { "id": "10", "name": "Women's Gloves", "brand": "UVW", "price": 19.99, "color": "Red", "size": "S", "category": "Accessories" }
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
    } else if (req.url === '/men') {
        res.writeHead(200);
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.writeHead(200);
        res.end(JSON.stringify(womenProducts));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Page not found' }));
    }
});

const PORT = 8081;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
