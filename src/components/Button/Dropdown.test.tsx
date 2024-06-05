import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // Add more people as needed
];

describe('Dropdown Component', () => {
  it('renders correctly with initial state', () => {
    const { getByText } = render(<Dropdown label="Select a person" />);
    expect(getByText('Select a person')).toBeInTheDocument();
    expect(getByText('Tom Cook')).toBeInTheDocument(); // Initial selected person
  });

  it('opens the dropdown and selects a different person', () => {
    const { getByRole, getByText } = render(<Dropdown label="Select a person" />);
    
    // Click to open the dropdown
    getByRole('button').click();

    // Select a different person
    getByText('Arlene Mccoy').click();
    
    // Verify that the selected person has changed
    expect(getByText('Arlene Mccoy')).toBeInTheDocument();
  });

  it('handles the case where no label is provided', () => {
    const { getByRole } = render(<Dropdown label="" />);
    // Ensure the dropdown still renders correctly without a label
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('checks ARIA roles and accessibility attributes', () => {
    const { getByRole } = render(<Dropdown label="Select a person" />);
    
    expect(getByRole('combobox')).toBeInTheDocument();
    expect(getByRole('option', { name: 'Tom Cook' })).toBeInTheDocument();
  });
});
