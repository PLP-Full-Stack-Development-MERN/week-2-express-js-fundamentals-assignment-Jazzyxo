const getProducts = (req, res) => {
    res.json([{ id: 101, name: "Laptop" }, { id: 102, name: "Phone" }]);
};

const createProduct = (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `Product ${name} added successfully` });
};

module.exports = { getProducts, createProduct };
