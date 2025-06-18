const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    reqired: true,
    unique: true,
  },
});

module.exports = mongoose.model("Favourite", favouriteSchema);
