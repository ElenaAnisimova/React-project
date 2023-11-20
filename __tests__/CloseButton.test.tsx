import { CloseButton } from '../src/components/Buttons/CloseButton';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('CloseButton', () => {
  test('should call closeDetails function on button click', () => {
    const closeDetailsMock = jest.fn();
    const { getByLabelText } = render(
      <CloseButton closeDetails={closeDetailsMock}>Close</CloseButton>
    );

    const closeButton = getByLabelText('close-button');
    fireEvent.click(closeButton);

    expect(closeDetailsMock).toHaveBeenCalledTimes(1);
  });

  test('should render the children correctly', () => {
    const closeDetailsMock = jest.fn();
    const { getByText } = render(
      <CloseButton closeDetails={closeDetailsMock}>Close</CloseButton>
    );
    const closeButton = getByText('Close');
    expect(closeButton).toBeInTheDocument();
  });
});
