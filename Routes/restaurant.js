const { Router } = require("express");
const {
  getRestaurants,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  getNearBranch,
} = require("../controller/restaurant");

const router = Router();

router.route("/near").post(getNearBranch);
router.route("/").get(getRestaurants).post(createRestaurant);
router.route("/:id").delete(deleteRestaurant).put(updateRestaurant);

module.exports = router;
