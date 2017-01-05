const webpack = require('webpack');
const HOST = process.env.HOST;
const PORT = process.env.PORT;

module.exports = {
  entry: {
    main: './index.web.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
	devServer: {
		inline: true,
		port: PORT,
		host: HOST
	},
};
