import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      user: req.user.userId,
    });

    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.userId,
    });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description, completed } = req.body;

    const task = await Task.findOne({
      _id: id,
      user: req.user.userId,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.completed = completed ?? task.completed;

    await task.save();

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      _id: id,
      user: req.user.userId,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await task.deleteOne();

    return res.status(200).json({
      message: "Task Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
