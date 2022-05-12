import { FiArrowRightCircle, FiCheckSquare, FiEdit } from "react-icons/fi";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

const MainFocus = () => {
  const [localMainFocus, setLocalMainFocus] = useLocalStorage("mainFocus", {
    task: "",
    isDone: false,
    editing: false,
  });

  const inputHandler = (event) => {
    if (event.key === "Enter") {
      setLocalMainFocus({
        task: event.target.value,
        isDone: false,
        editing: false,
      });
    }
  };

  return (
    <section>
      {!localMainFocus.task && !localMainFocus.isDone && (
        <div>
          <p className="text-light text-s">What's your main focus for today?</p>
          <input
            className="task-input text-light text-m px-s my-s br-m"
            type="text"
            onKeyDown={inputHandler}
          />
        </div>
      )}

      {localMainFocus.task && !localMainFocus.isDone && (
        <div>
          <h3 className="text-light my-s">Today</h3>
          <div className="task-container text-m px-s py-xs">
            {!localMainFocus.editing && (
              <span className="text-light text-m font-bold">
                {localMainFocus.task}
              </span>
            )}
            {localMainFocus.editing && (
              <input
                className="edit-input br-m text-m px-s"
                type="text"
                value={localMainFocus.task}
                onChange={(event) =>
                  setLocalMainFocus({
                    ...localMainFocus,
                    task: event.target.value,
                  })
                }
                onKeyDown={inputHandler}
              />
            )}
            <div className="text-light">
              <FiEdit
                className="pointer mx-s"
                onClick={() =>
                  setLocalMainFocus({
                    ...localMainFocus,
                    editing: !localMainFocus.editing,
                  })
                }
              />
              <FiCheckSquare
                className="pointer mx-s"
                onClick={() =>
                  setLocalMainFocus({
                    ...localMainFocus,
                    task: "",
                    isDone: true,
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
      {localMainFocus.isDone && (
        <p className="text-light text-s my-xs">Kudos, You did it!</p>
      )}
      {localMainFocus.isDone && (
        <FiArrowRightCircle
          size={25}
          className="text-light pointer my-xs"
          onClick={() =>
            setLocalMainFocus({ ...localMainFocus, isDone: false })
          }
        />
      )}
    </section>
  );
};
export { MainFocus };
