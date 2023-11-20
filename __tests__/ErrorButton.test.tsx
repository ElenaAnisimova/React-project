import { render, fireEvent } from '@testing-library/react';
import { ErrorButton } from '../src/components/Buttons/ErrorButton';
import React from 'react';
import '@testing-library/jest-dom';

describe('ErrorButton', () => {
  test('should call makeError function on button click', () => {
    const makeErrorMock = jest.fn();
    const { getByText } = render(
      <ErrorButton makeError={makeErrorMock}>Error</ErrorButton>
    );
    const errorButton = getByText('Error');
    fireEvent.click(errorButton);
    expect(makeErrorMock).toHaveBeenCalledTimes(1);
  });

  test('should render the children correctly', () => {
    const makeErrorMock = jest.fn();
    const { getByText } = render(
      <ErrorButton makeError={makeErrorMock}>Error</ErrorButton>
    );
    const errorButton = getByText('Error');
    expect(errorButton).toBeInTheDocument();
  });
});
