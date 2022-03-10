import React from 'react';
import { render, screen, cleanup, fireEvent, waitForElement, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Confirm } from '../../components/Confirm';
import { AppContextProvider } from '../../context/AppContext';

import { axiosErrorResponse400, axiosErrorResponse401, mockGlobalState } from '../mocks/mockData'


jest.mock('axios')
afterEach(cleanup);
afterAll(jest.clearAllMocks);


describe("<Confirm />", () => {
    describe("When Confirm component has been rendered with global state from Context", () => {
  
      beforeEach(() => {
        const steps = ['User Information', 'Shipping address', "Confirm Order"];
        const wrapper = (
            <AppContextProvider value={mockGlobalState}>
                <Confirm steps={steps} activeStep={2} />
            </AppContextProvider>
        )
        render(wrapper);
      });
      
        test('Component should be rendered', async() => {
            const orderButton = screen.getByTestId("confirm-order");
            expect(orderButton).toBeInTheDocument("PLACE ORDER");
        })

        test('Component should be rendered', async() => {
            const text = screen.getByText("Order summary");
            expect(text).toBeInTheDocument();
        })

        test('Create snapshot of Confirm component', () => {
            const steps = ['User Information', 'Shipping address', "Confirm Order"];
            const wrapper = render(
                <AppContextProvider value={mockGlobalState}>
                    <Confirm steps={steps} activeStep={2} />
                </AppContextProvider>
            )
            expect(wrapper).toMatchSnapshot()
        })
    });
  });
