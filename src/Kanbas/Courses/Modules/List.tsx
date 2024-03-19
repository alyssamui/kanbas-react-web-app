import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import { useState } from "react";
import { useParams } from "react-router";
function ModuleList() {
  const courseId = useParams().courseId;
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      <div className="header-buttons">
        <button type="submit" className="btn btn-primary">
          Collapse All
        </button>
        <button type="submit" className="btn btn-primary">
          View Progress
        </button>
        <select className="form-select">
          <option selected>Publish All</option>
        </select>
        <button
          type="submit"
          className="btn btn-primary"
          id="add-module-button"
        >
          + Module
        </button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="wd-modules-form">
            <div className="add-module">
              <input
                className="form-control"
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
              <button
                className="btn btn-primary"
                onClick={() => dispatch(updateModule(module))}
              >
                Update
              </button>
              <button
                className="btn btn-primary add"
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
              >
                {" "}
                Add{" "}
              </button>
            </div>
            <textarea
              className="form-control"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <div className="module-name">
                  <div className="edit-delete-module">
                    <FaEllipsisV className="me-2" />
                    {module.name}
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-primary delete"
                      onClick={() => dispatch(deleteModule(module._id))}
                    >
                      Delete
                    </button>
                  </div>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </div>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: any) => {
                    console.log(lesson);
                    return (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
