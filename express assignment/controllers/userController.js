const getUsers = (req, res) => {
    res.json([{ id: 1, name: "Barry Allen" }, { id: 2, name: "Iris West" }]);
};

const createUser = (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `User ${name} created successfully` });
};

module.exports = { getUsers, createUser };
