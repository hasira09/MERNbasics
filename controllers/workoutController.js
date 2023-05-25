const Workout = require('../models/WorkoutModels')
const mongoose = require('mongoose')

// Get all Workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: 'No Such Workout'})
    }

}

// Create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} =req.body

    // Add doc to DB
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a new workout


// Update a workout


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}