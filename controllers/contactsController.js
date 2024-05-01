// @description Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
	res.status(200).json({ message: "Get all contacts" });
};

// @description Create contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
	res.status(200).json({ message: "Create Contact"});
};


// @description Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
	res.status(200).json({ message: `Get Contact for ${req.params.id}`});
};


// @description Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
	res.status(200).json({ message: `Update contact for ${req.params.id}`});
};


// @description Delate contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
	res.status(200).json({ message: `Delete contact for ${req.params.id}`});
};


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
