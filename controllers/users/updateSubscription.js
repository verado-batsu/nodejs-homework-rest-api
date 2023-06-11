const { User } = require("../../models");

const updateSubscription = async (req, res) => {
	const { _id: id } = req.user;
	const { subscription } = req.body;
	await User.findByIdAndUpdate(id, { subscription })
	
	res.json({
		message: `Success update to ${subscription}`
	})
}

module.exports = updateSubscription;