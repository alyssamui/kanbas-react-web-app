import ModuleList from "../Modules/List";
import {
  FaBan,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import "./index.css";
import { TbFileArrowRight } from "react-icons/tb";
import { SlTarget } from "react-icons/sl";
import { IoBarChart, IoMegaphoneOutline } from "react-icons/io5";
import { CiBellOn, CiCalendar } from "react-icons/ci";

function Home() {
  return (
    <div className="home">
      <div className="modules">
        <ModuleList />
      </div>
      <div
        className="flex-grow-0 me-2 d-none d-lg-block course-status"
        style={{ width: "250px" }}
      >
        <h3>Course Status</h3>
        <button className="btn btn-primary" id="unpublish">
          <FaBan /> Unpublish
        </button>
        <button className="btn btn-primary" id="published">
          <FaCheckCircle /> Published
        </button>
        <br />
        <br />
        <button className="btn btn-primary" id="course-status-long-buttons">
          <TbFileArrowRight /> Import Existing Content
        </button>
        <button className="btn btn-primary" id="course-status-long-buttons">
          <FaCircleArrowRight /> Import from Commons
        </button>
        <button className="btn btn-primary" id="course-status-long-buttons">
          <SlTarget /> Choose Home Page
        </button>
        <button className="btn btn-primary" id="course-status-long-buttons">
          <IoBarChart /> View Course Stream
        </button>
        <button className="btn btn-primary" id="course-status-long-buttons">
          <IoMegaphoneOutline /> New Announcement
        </button>
        <button className="btn btn-primary" id="course-status-long-buttons">
          <IoBarChart /> New Analytics
        </button>
        <button className="btn btn-primary" id="course-status-long-buttons">
          <CiBellOn />
          View Course Notifications
        </button>
        <br />
        <br />
        <p>To Do</p>
        <hr />
        <div className="todo">
          <div>
            <a href="#">
              <FaExclamationCircle />
              {"  "} Grade A1 - ENV + HTML
            </a>
            {"  "}
            <FaTimes />
          </div>
          <div className="todo-desc">100 points • Sep 18 at 11:59pm</div>
        </div>
        <br />
        <div className="coming-up">
          <p>Coming Up</p>
          <a href="#">
            {" "}
            <CiCalendar />
            View Calendar
          </a>
        </div>
        <hr />
        <div className="todo">
          <div>
            <a href="#">
              {" "}
              <CiCalendar />
              Lecture
            </a>
          </div>
          <div className="todo-desc">
            CS4550.12631.202410 <br />
            Sep 11 at 11:45am
          </div>
        </div>
        <div className="todo">
          <div>
            <a href="#">
              <CiCalendar />
              CS5610 06 SP23 Lecture
            </a>
          </div>
          <div className="todo-desc">
            CS4550.12631.202410 <br />
            Sep 11 at 6pm
          </div>
        </div>
        <div className="todo">
          <div>
            <a href="#">
              <CiCalendar />
              CS5610 Web Development Summer 1 2023 - LECTURE
            </a>
          </div>
          <div className="todo-desc">
            CS4550.12631.202410 <br />
            Sep 11 at 7
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
