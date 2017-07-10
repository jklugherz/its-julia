var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.(svg|jpe?g|png|gif|ico)(\?{0}(?=\?|$))/,
         use: [
           {
      loader: 'file-loader',
      options: {
        query: {
          name:'/app/img/[name].[ext]'
        }
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        query: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: true,
          },
          optipng: {
            optimizationLevel: 7,
          }
        }
      }
    }

         ]
}
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
