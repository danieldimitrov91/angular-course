loginInterceptor.$inject = ['sessionService'];

function loginInterceptor(sessionService) {
    return {
        request: function (config) {
            console.log(config);
            return config;
        },
        response: function (response) {

            sessionService.setSession(true);
            console.log(response);
            var transformResponse = {
                data: {
                    result: response.data,
                    status: response.status
                }
            };
            console.log(transformResponse);
            return transformResponse;
        },
        responseError: function (response) {
            sessionService.setSession(true);
            console.log(response);
            return response;
        }
    };
}

export default loginInterceptor;