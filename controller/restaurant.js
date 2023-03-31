const Restaurant = require("../model/restaurant");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().limit(5);

    res.status(200).json({ success: true, message: restaurants });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
const createRestaurant = async (req, res) => {
  const { name, lon, lat } = req.body;
  try {
    const restaurant = await Restaurant.create({
      name,
      location: { coordinates: [lon, lat] },
    });

    res.status(200).json({ success: true, message: restaurant });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
const deleteRestaurant = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai hereglegc oldsongui`,
    });
  }
  try {
    const restaurant = await Restaurant.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: `${id} - tai hereglegc ustlaa`, restaurant });
  } catch (error) {
    next(error);
  }
};
const updateRestaurant = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai hereglegc oldsongui`,
    });
  }
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({
      message: `${id} - tai hereglegciin medeelel amjilttai soligdloo`,
      restaurant,
    });
  } catch (error) {
    next(error);
  }
};
const getNearBranch = async (req, res) => {
  console.log("POST");
  const { lon, lat } = req.body;
  const { distance } = req.query;

  console.log("POS-LON", lon);
  console.log("POS-LAT", lat);
  console.log("POS-LAT", req.query);

  try {
    const branches = await Restaurant.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: [lon, lat] },
          $maxDistance: distance,
        },
      },
    });
    res.status(200).json({ success: true, branches });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ success: false, message: error });
  }
};
module.exports = {
  getRestaurants,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  getNearBranch,
};
