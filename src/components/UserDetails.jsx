import { useState } from "react";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";
import { MainFocus } from "./MainFocus";

const UserDetails = () => {
  const [localUserName, setLocalUserName] = useLocalStorage("userName", "");

  const [input, setInput] = useState(false);

  return (
    <div>
      {!localUserName && (
        <section>
          <h2 className="text-light text-l my-s mx-auto">Enter your name</h2>
          <input
            className="user-input text-m p-s my-s mx-auto"
            type="text"
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="btn btn-gradient"
            onClick={() => setLocalUserName(input)}
          >
            Get Started
          </button>
        </section>
      )}
      {localUserName && (
        <section className="">
          <p className="text-light text-m my-s">
            Welcome{" "}
            {localUserName[0].toUpperCase() + localUserName.substring(1)}
          </p>
          <MainFocus />
        </section>
      )}
    </div>
  );
};
export { UserDetails };
