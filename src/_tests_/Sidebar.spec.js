import React from 'react';
import { render, cleanup, fireEvent, getByText } from '@testing-library/react';
import { Sidebar } from '../components/layout/Sidebar';

jest.mock('../context', () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => 'INBOX'),
  })),
  useProjectsValue: jest.fn(() => ({
    setProjects: jest.fn(),
    projects: [
      {
        name: 'Football',
        userId: '2xNeLuAJF37Li940sZ1E',
        projectId: '1',
        docId: '2tVDOQ65d1U2Q94zIDiN'
      },
    ],
  })),
}));

beforeEach(cleanup);

describe('<Sidebar />', () => {
  describe('Success', () => {
    it('renders the <Sidebar />', () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();
    });
    
    it('changes the active project to Inbox in collated tasks', () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();
      fireEvent.click(queryByTestId('inbox-action'));
      fireEvent.keyDown(queryByTestId('inbox-action'));
      
      expect(queryByTestId('inbox').classList.contains('active')).toBeTruthy();
      expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
      expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
    });
    
    it('changes the active project to Today in collated tasks', () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();
      fireEvent.click(queryByTestId('today-action'));
      fireEvent.keyDown(queryByTestId('today-action'));
      
      expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
      expect(queryByTestId('today').classList.contains('active')).toBeTruthy();
      expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
    });
    
    it('changes the active project to Next_7 in collated tasks', () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();
      fireEvent.click(queryByTestId('next_7-action'));
      fireEvent.keyDown(queryByTestId('next_7-action'));

      expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
      expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
      expect(queryByTestId('next_7').classList.contains('active')).toBeTruthy();
    });

    it('hides and show the sidebar project using onClick', () => {
      const { queryByTestId, queryByText } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();

      fireEvent.click(queryByText('Projects'));
      expect(queryByText('Add Project')).toBeFalsy();

      fireEvent.click(queryByText('Projects'));
      expect(queryByText('Add Project')).toBeTruthy();
    });

    it('hides and show the sidebar project using onKeyDown', () => {
      const { queryByTestId, queryByText } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();

      fireEvent.keyDown(queryByText('Projects'));
      expect(queryByText('Add Project')).toBeFalsy();

      fireEvent.keyDown(queryByText('Projects'));
      expect(queryByText('Add Project')).toBeTruthy();
    });
  });
});