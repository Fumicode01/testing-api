import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import { Confirm } from '../../components/Confirm';

afterEach(cleanup);

test('Component should be rendered', async() => {
    render(<Confirm />);
    const titleText = screen.findByText("Order summary");
    expect(titleText).toBeInTheDocument();
})