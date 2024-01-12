const cracoAlias = require('craco-alias')

module.exports = {
    plugins: [
        {
            plugin: cracoAlias,
            options: {
                source: 'options',
                baseUrl: './',
                aliases: {
                    '@': 'src',
                    '@variables': 'src/styles/_variables.scss',
                    '@lib': 'src/app/lib',
                    '@components': 'src/app/components',
                    '@types': 'src/app/types',
                    '@images': 'src/app/assets/images',
                    '@hooks': 'src/app/hooks',
                    '@UI': 'src/app/UI',
                    '@Ordinary': 'src/app/Ordinary',
                    '@redux': 'src/app/redux',
                    '@interfaces': 'src/app/interface',
                    '@HOC': 'src/app/HOC',
                    '@fonts': 'src/fonts',
                    '@globalVariables': 'src/globalVariables.ts',
                    '@API_RESPONSES': 'src/app/API_RESPONSES.ts',
                },
            },
        },
    ],
}
