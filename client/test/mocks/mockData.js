export const axiosErrorResponse400 = {
    response:{
        status:400,
        statusText:"Bad Request",
        data: {
             errorCode: "api_validationerror",
             errorId: "error-19g6jl0g1lsdz",
             httpStatusCode: 400,
             message:{
                 status: 400,
                 statusText: "Bad Request"
             }
        }
    }
}

export const axiosErrorResponse401 = {
    response:{
        status:401,
        statusText:"Unauthorized",
        data: "Unauthorized",
        headers:{
            'content-length': "14",
            'content-type': "application/json; charset=utf-8",
        }
    }
}

export const mockGlobalState = {
    consumer:{
        email: 'sample@email.com',
        givenNames: 'sampleFirst',
        surname: 'sampleSername',
        phoneNumber: '041234567'
    },
    items: [
        {
            price:{
                amount:"100",
                currency:"EUR"
            },
            brand:"Apple",
            category:"Electronics",
            name:"iPhone X",
            quantity:1,
            sku:"APPLEIPHONEX"
        }
    ],
    shipping:{
        countryCode:'AU',
        line1:'Halifax Street',
        name:'John',
        phoneNumber:'0412345434',
        postcode:'2000',
        suburb:'Sydney'
    },
    merchant:{
        redirectCancelUrl:"http://localhost:3000/cancel",
        redirectConfirmUrl:"http://localhost:3000/confirm",
    },
    totalAmount:{
        amount:"100",
        currency:"EUR"
    }
}