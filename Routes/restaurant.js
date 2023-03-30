const { Router } = require("express");
const {
  getRestaurants,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
} = require("../controller/restaurant");

const router = Router();

router.route("/").get(getRestaurants).post(createRestaurant);
router.route("/:id").delete(deleteRestaurant).put(updateRestaurant);

module.exports = router;
