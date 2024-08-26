export const ADD_TASK = "ADD_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
