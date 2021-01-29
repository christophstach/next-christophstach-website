module.exports = {
    schema: 'https://api-eu-central-1.graphcms.com/v2/ckkh9l8ttiihy01xyadu60cri/master',
    documents: 'graphql/**/*.graphql',
    extensions: {
        codegen: {
            generates: {
                'graphcms.types.d.ts': {
                    plugins: [
                        'typescript',
                        'typescript-resolvers',
                    ]
                }
            }
        }
    },
};