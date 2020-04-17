import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { Projects } from "../Projects";
import { useSelectedProjectValue } from "../../context";
import { useState } from "react/cjs/react.development";
import { AddProject } from "../AddProject";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === "inbox" ? "active" : undefined}
          data-testid="inbox"
        >
          <div
            aria-label="Show inbox tasks"
            data-testid="inbox-action"
            onClick={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
            onKeyDown={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
            tabIndex={0}
            role="button"
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          className={active === "today" ? "active" : undefined}
          data-testid="today"
        >
          <div
            aria-label="Show today tasks"
            data-testid="today-action"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive("today");
              setSelectedProject("TODAY");
            }}
            onKeyDown={() => {
              setActive("today");
              setSelectedProject("TODAY");
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          className={active === "next_7" ? "active" : undefined}
          data-testid="next_7"
        >
          <div
            aria-label="Show tasks for the next 7 days"
            data-testid="next_7-action"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive("next_7");
              setSelectedProject("NEXT_7");
            }}
            onKeyDown={() => {
              setActive("next_7");
              setSelectedProject("NEXT_7");
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>

      <div
        className="sidebar__middle"
        aria-label="Show/Hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};
