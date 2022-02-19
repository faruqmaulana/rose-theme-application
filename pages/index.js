// import Cards from "../components/Cards";

// export default function Home() {
//   return (
//     <>

//       {/* <div className="container">
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-neutral-900 to-slate-900">
//           <Cards></Cards>
//         </div>
//       </div> */}
//     </>
//   );
// }

import { Transition } from "@headlessui/react";
import { useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const [activity, setActivity] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const generateId = () => {
    return Date.now();
  };

  function saveTodoHandler(e) {
    e.preventDefault();
    if (!activity) {
      return setMsg("Aktivitas tidak boleh kosong ");
    }
    setMsg("");

    if (edit.id) {
      const updateTodo = {
        id: edit.id,
        activity,
        done: edit.done,
      };

      const editTodoIndex = todos.findIndex((todo) => {
        return todo.id == edit.id;
      });

      const updateTodos = [...todos];
      updateTodos[editTodoIndex] = updateTodo;

      setTodos(updateTodos);
      return cancelEditHandler();
    }

    setTodos((arr) => [
      ...arr,
      {
        id: generateId(),
        activity,
        done: false,
      },
    ]);
    setActivity("");
  }

  function removeHandler(todoId) {
    setMsg("");
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    return cancelEditHandler();
  }

  function editHandler(todo) {
    setMsg("");
    setActivity(todo.activity);
    setEdit(todo);
    setShow(true);
  }

  function cancelEditHandler() {
    setEdit({});
    setActivity("");
    setShow(false);
  }

  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex((currentTodo) => {
      return currentTodo.id == todo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;

    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  const buttonStyle =
    "px-2 bg-rose-200 rounded-md font-mono fonst-semibold h-8 shadow-lg focus:outline-none focus:ring-2 ring-1 ring-rose-300 transition duration-500";
  return (
    <>
      <div className="container flex flex-col min-h-screen justify-center items-center bg-rose-500">
        <h1
          className={`font-mono font-bold text-2xl w-full text-center py-3 bg-rose-400 rounded-lg ${
            msg ? "mb-0" : "mb-6"
          }`}
        >
          Todo List APP
        </h1>
        {msg && (
          <Transition
            appear={true}
            className="flex flex-row justify-center items-center bg-rose-300 mt-6 w-12/12 p-2 rounded-lg font-mono font-medium"
            show={true}
            enter="transition duration-500"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
          >
            {msg}
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-rose-600 animate-pulse ml-1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z"/>
            </svg>
          </Transition>
        )}
        <form
          className="mt-3 flex items-center justify-center gap-3"
          onSubmit={saveTodoHandler}
        >
          <input
            type="text"
            maxLength={21}
            placeholder="Your activity"
            value={activity}
            className={`placeholder:font-mono placeholder:text-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-300 focus:accent-rose-400 focus:border-rose-400 transition duration-500 shadow-lg shadow-rose-600 text-rose-500 font-mono px-2 rounded-lg ${
              edit.id ? "h-16" : "h-8"
            }`}
            onChange={(e) => {
              setActivity(e.target.value);
            }}
          />
          <div className="flex flex-col gap-2">
            <Button type="submit" className="bg-rose-400 px-6">
              {edit.id ? "Simpan" : "Tambah"}
            </Button>
            {edit.id && (
              <Transition
                appear={show}
                show={show}
                enter="transition duration-500"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-500"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo=" opcaity-0"
              >
                <button
                  className="bg-rose-400 px-1 w-full rounded-md font-mono fonst-semibold h-8 shadow-lg focus:outline-none focus:ring-2 ring-1 ring-rose-300 transition duration-500"
                  onClick={cancelEditHandler}
                >
                  Batal Edit
                </button>
              </Transition>
            )}
          </div>
        </form>
        {todos.length > 0 ? (
          <ul className="flex flex-col items-start mt-4">
            {todos.map((todo) => {
              return (
                <Transition
                  appear={true}
                  show={true}
                  key={todo.id}
                  className="flex flex-row gap-1"
                  enter="transition duration-500"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                >
                  <li
                    className="flex flex-row items-center font-mono font-bold w-60 p-1 bg-rose-200 rounded-md shadow-lg mb-2 mr-1"
                    style={{
                      textDecoration: `${
                        todo.done == true ? "line-through" : ""
                      }`,
                    }}
                  >
                    {/* prettier-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${!todo.done && "animate-bounce mt-2"} mt-1 mr-1 text-rose-500`} viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
                    </svg>
                    {todo.activity}
                    <input
                      type="checkbox"
                      className="ml-auto mr-1 rounded-lg text-rose-500 focus:ring-0 focus:border-rose-500 focus:accent-rose-500 transition duration-500"
                      onChange={doneTodoHandler.bind(this, todo)}
                    />
                  </li>
                  <button
                    className={buttonStyle}
                    onClick={removeHandler.bind(this, todo.id)}
                  >
                    {/* prettier-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-rose-500" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                  </button>
                  <button
                    className={buttonStyle}
                    onClick={editHandler.bind(this, todo)}
                  >
                    {/* prettier-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-rose-500" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                  </button>
                </Transition>
              );
            })}
          </ul>
        ) : (
          <h1 className="font-mono font-medium text-md px-3 py-2 bg-rose-300 mt-4 rounded-lg animate-pulse">
            Belum ada aktivitas
          </h1>
        )}
      </div>
    </>
  );
}
