const express = require('express');
const router = express.Router();
const WorkoutCtrl = require('../controllers/workoutController');
const authController = require('../controllers/authController');
const verify = require('../utils/verifyToken');
// POST request to /workouts to create a new workout
router.post('/workouts', WorkoutCtrl.createNewWorkout);
//GET request to /workouts to fetch all workouts
router.get('/workouts', WorkoutCtrl.fetchWorkouts);
//GET request to /workouts/:id to fetch a single workout by id
router.get('/workouts/:id',  WorkoutCtrl.fetchSingleWorkout);
//PUT request to /workouts/:id to update a specific workout
router.put('/workouts/:id',  WorkoutCtrl.updateSingleWorkout);
//DELETE request to /workouts/:id to delete a specific workout
//router.delete('/workouts/:id', WorkoutCtrl.deleteSingleWorkout);
module.exports = router;