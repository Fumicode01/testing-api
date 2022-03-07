import React from 'react';
import axios from 'axios'
import { render, screen, cleanup, fireEvent, waitForElement, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Confirm } from '../../components/Confirm';
import { axiosErrorResponse400, axiosErrorResponse401 } from '../mocks/mockData'


jest.mock('axios')
afterEach(cleanup);
afterAll(jest.clearAllMocks);

test('Component should be rendered', async() => {
    render(<Confirm steps={2}/>);
    const orderButton = screen.getByTestId("confirm-order");
    expect(orderButton).toBeInTheDocument("PLACE ORDER");
})

test('Component should be rendered', async() => {
    render(
        <Confirm steps={2} />
    );
    const text = screen.getByText("Order summary");
    expect(text).toBeInTheDocument();
})

// test('The Confirm Order button has been clicked', async() => {
//     const handleClick = jest.fn();
//     render(<Confirm steps={2} handleClick={handleClick} />);
//     const orderButton = screen.getByTestId("confirm-order");
//     fireEvent.click(orderButton);

//     expect(handleClick).toHaveBeenCalled();
// })

describe("Sned API request", () => {
    // describe("When API call is successful", () => {
    //     const AxiosResponse = {
    //         data:{
    //             "token": "01L0FW6CT5",
    //             "expires": "2022-03-06T23:39:42.905Z",
    //             "checkoutUrl": "https://portal.staging.scalapay.com/checkout/01L0FW6CT5"
    //         }
    //     }
    //     jest.spyOn(axios, "post").mockResolvedValue(AxiosResponse);
    //     render(<Confirm steps={2} />);
    //     expect(axiosMock.post).toHaveBeenCalledTimes(1);

    // })
        // test("When API call not success", async () => {
        //     jest.spyOn(axios, 'post').mockRejectedValue(()=>({}));
        //     render(<Confirm steps={2} />)
        //     const error = screen.getByTestId("error");
        //     await waitFor(() => expect(error).toBeInTheDocument())
        // })
        test("Input values are not suit", async () => {
            await jest.spyOn(axios, "post").mockResolvedValue(axiosErrorResponse400);
            render(<Confirm steps={2} />);
            const error = screen.getByText('Please check your details and try again.')
            await waitFor(() => expect(error).toBeInTheDocument())
        })

        test("Authorization error", async () => {
            await jest.spyOn(axios, "post").mockResolvedValue(axiosErrorResponse401);
            render(<Confirm steps={2} />);
            const error = screen.getByTestId("error");
            // const error = screen.getByText('Authentication failed. Please login again or Contact us.')
            await waitFor(() => expect(error).toBeInTheDocument())
        })


})