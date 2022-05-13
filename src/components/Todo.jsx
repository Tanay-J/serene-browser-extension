import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

const Todo = () => {
  const [localTodos, setLocalTodos] = useLocalStorage("todos", []);
  const [localCompTodos, setLocalCompTodos] = useLocalStorage("compTodos", []);

  const [showTodo, setShowTodo] = useState(false);

  const inputHandler = (event) => {
    if (event.key === "Enter") {
      setLocalTodos([
        ...localTodos,
        { _id: uuid(), task: event.target.value, isDone: false },
      ]);
      event.target.value = "";
    }
  };
  const taskCompletionHandler = (taskObj) => {
    setLocalCompTodos([...localCompTodos, taskObj]);
    setLocalTodos(localTodos.filter((item) => item._id !== taskObj._id));
  };
  const deletionHandler = (id) => {
    setLocalCompTodos(localCompTodos.filter((item) => item._id !== id));
  };

  return (
    <div className="todo-wrapper">
      {showTodo && (
        <div className="todo-container slide-left text-center px-s py-m br-m">
          <h3 className="text-light">Today's tasks</h3>
          <input
            className="todo-input my-s px-s py-xs"
            onKeyDown={inputHandler}
            placeholder="Add a task and press Enter"
          />
          <ul className=" text-light text-left flex flex-col-reverse">
            {localTodos.map((taskObj) => (
              <li className="list-item flex justify-content-space-bet">
                <span>{taskObj.task}</span>
                <input
                  type="checkbox"
                  checked={taskObj.isDone}
                  value={taskObj.task}
                  onChange={() => taskCompletionHandler(taskObj)}
                />
              </li>
            ))}
            {localTodos.length !== 0 && <h4>To do</h4>}
          </ul>
          <p className="my-s"> </p>
          <ul className=" text-light text-left  ">
            {localCompTodos.length !== 0 && <h4>Completed</h4>}
            {localCompTodos.map((taskObj) => (
              <li className="list-item flex justify-content-space-bet">
                <s>{taskObj.task}</s>
                <FiTrash2 onClick={() => deletionHandler(taskObj._id)} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className={`btn-float btn-gradient`}
        onClick={() => setShowTodo(!showTodo)}
      >
        Tasks
      </button>
    </div>
  );
};
export { Todo };
