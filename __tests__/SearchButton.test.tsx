import { render, fireEvent } from '@testing-library/react';
import { SearchButton } from '../src/components/Buttons/SearchButton';
import React from 'react';
import '@testing-library/jest-dom';

describe('SearchButton', () => {
  test('should call sendRequest function on button click', () => {
    const sendRequestMock = jest.fn();
    const { getByText } = render(
      <SearchButton sendRequest={sendRequestMock}>Search</SearchButton>
    );

    const searchButton = getByText('Search');
    fireEvent.click(searchButton);

    expect(sendRequestMock).toHaveBeenCalledTimes(1);
  });

  test('should render the children correctly', () => {
    const sendRequestMock = jest.fn();
    const { getByText } = render(
      <SearchButton sendRequest={sendRequestMock}>Search</SearchButton>
    );

    const searchButton = getByText('Search');
    expect(searchButton).toBeInTheDocument();
  });
});
