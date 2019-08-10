import lambdaPlayground from 'graphql-playground-middleware-lambda'
// or using require()
// const lambdaPlayground = require('graphql-playground-middleware-lambda').default

// export const graphqlHandler=(event, context, callback) =>{
//     function callbackFilter(error, output) {
//         // eslint-disable-next-line no-param-reassign
//         output.headers['Access-Control-Allow-Origin'] = '*'
//         callback(error, output)
//     }
//
//     const handler = graphqlLambda({ schema: myGraphQLSchema })
//     return handler(event, context, callbackFilter)
// }

export const playgroundHandler = lambdaPlayground({
    endpoint: 'http://localhost:62222/graphql',
})
