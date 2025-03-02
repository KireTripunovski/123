import { useEffect, useState } from "react";
import "../../App.css";
import "./Tasks.css";
import { Task } from "../../types/userTypes";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:3002/Tasks")
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);

  return (
    <>
      <section className="sandBackgroundColor darkBlueColor backgroundImgTasks">
        <div className="container">
          <h1 className="headingFont text-center tightText">
            <span className="fw-bold">Our platform is based on 3</span> <br />
            <span className="fw-light">simple</span>{" "}
            <span className="fw-bold">tasks:</span>
          </h1>

          <div className="row">
            {tasks.map((task) => (
              <div className="col-4">
                <div className="taskcard">
                  <img
                    src={task.image}
                    className="card-img-top img"
                    alt={task.image}
                  />
                  <div className="card-body">
                    <h5 className="card-title my-4">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
