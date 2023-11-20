import SearchItem from '../src/components/SearchItem/SearchItem';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

const ItemMock = {
  name: 'Bilbo',
  height: '100',
  birth: '888',
  race: 'hobbit',
  spouse: 'none',
  _id: '123',
};
const index = 1;
const mockFn = jest.fn();

test('renders card item with correct information', () => {
  render(
    <SearchItem searchResults={ItemMock} key={index} showDetails={mockFn} />
  );
  expect(screen.queryByText(`${ItemMock.name}`)).toBeInTheDocument();
  expect(screen.queryByText(`Race: ${ItemMock.race}`)).toBeInTheDocument();
  expect(screen.queryByText(`Height: ${ItemMock.height}`)).toBeInTheDocument();
  expect(
    screen.queryByText(`Birth year: ${ItemMock.birth}`)
  ).toBeInTheDocument();
  expect(screen.queryByText(`Spouse: ${ItemMock.spouse}`)).toBeInTheDocument();
});

test('should call showDetails function on button click', () => {
  const showDetailsMock = jest.fn();
  const { getByText } = render(
    <SearchItem
      searchResults={ItemMock}
      key={index}
      showDetails={showDetailsMock}
    />
  );
  const closeButton = getByText('Bilbo');
  fireEvent.click(closeButton);

  expect(showDetailsMock).toHaveBeenCalledTimes(1);
});
