const Workout = require('../models/Workout');
const asyncHandler = require('../utils/asyncHandler');

exports.createNewWorkout = function(req, res){
    try {
        const { name, day, exercise } = req.body
        let newWorkout = Workout.create({ name, day, exercise })
        res.json({ message: `New workout successfully created!`, newWorkout })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
    }

exports.fetchWorkouts = (req, res) => {
    let conditions = {};
    if(req.query.name) {
        conditions.name = req.query.name
    }

    console.log(conditions)
    console.log(req.query)
    Workout.find(conditions, (err, workouts) => {
        if  (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ workouts })
        }
    })
}
exports.fetchSingleWorkout = (req,res) => {
    Workout.findById(req.params.id, (err,workout) => {
        if (err) {
            return res.status(500).json({ message:err })
        } else if (!workout) {
                return res.status(404).json({ message: "workout not found" })
            } else {
            return res.status(200).json({ workout })
        }
    })
    }
exports.updateSingleWorkout = (req,res) => {
    Workout.findById(req.params.id, (err, workout) => {
        if (err) {
            return res.status(500).json({ message:err })
        } else if (!workout) {
                return res.status(404).json({ message: "workout not found" })
            } else {
                workout.save((err,savedWorkout) => {
                    if(err){
                        return res.status(400).json({ message: err })
                    } else {
                        return res.status(200).json({ message: "workout updated successfully" })
        }
    });
}
    })
}
// exports.deleteSingleWorkout = (req, res) => {
//     Workout.findByIdAndDelete(req.params.id, (err, workout) => {
//         if(err){
//             return res.status(500).json({ message: err })
//         }
//         else if (!workout) {
//             return res.status(404).json({ message:"workout was not found" })
//         }
//         else {
//             return res.status(200).json({ message: "workout deleted successfully" })
//         }
//     }) 
//  }
