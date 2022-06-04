const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    categories: {
        type: Array,
        required: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);