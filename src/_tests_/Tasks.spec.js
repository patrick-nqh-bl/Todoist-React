import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tasks } from "../components/Tasks";
import { useSelectedProjectValue } from "../context";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "Football",
        userId: "2xNeLuAJF37Li940sZ1E",
        projectId: "1",
        docId: "2tVDOQ65d1U2Q94zIDiN",
      },
      {
        name: "Read Book",
        userId: "2xNeLuAJF37Li940sZ1E",
        projectId: "-M4xdS2W------------",
        docId: "k684S0k1iC2axz3OglxB",
      },
      {
        name: "Swimming",
        userId: "2xNeLuAJF37Li940sZ1E",
        projectId: "-M4tDLD9------------",
        docId: "zLa4PxmkBYyW7IWOamZO",
      },
    ],
  })),
}));

jest.mock("../hooks", () => ({
  useTasks: () => ({
    tasks: [
      {
        id: 'F4mS4KvhwxR0pOeZgz5J',
        archived: true,
        date: "",
        projectId: "1",
        task: "Champion EPL",
        userId: "2xNeLuAJF37Li940sZ1E",
      },
    ],
  }),
}));

beforeEach(cleanup);

describe('<Tasks />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders tasks', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => 'INBOX'),
      selectedProject: 'INBOX',
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('Inbox');
  });

  it('renders a task with a project title', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => '1'),
      selectedProject: '1',
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('Football');
  });

  it('renders a task with a collated title', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => 'INBOX'),
      selectedProject: 'INBOX',
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('Inbox');
  });
});
