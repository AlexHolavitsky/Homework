const HtmlWebpackPlugin = require("html-webpack-plugin");//подключение плагина для html
const path = require("path");//подключение index.js- для создания my-first-webpack.bundle.js 

module.exports = {
  
  //подключение index.js- для создания my-first-webpack.bundle.js 
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },

  //создание локал сервера
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
 //подключение модулей js(babel) css 
  module: {
    rules: [
      //js
      {test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',//нужно установить через терминал 'babel-loader'
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      //css    
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],//нужно установить через терминал "css-loader"
      },
   
    ]
  },

  //подключение плагина для html
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  mode: 'development',
};
