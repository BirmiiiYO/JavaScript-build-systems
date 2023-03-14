const path = require('path') // подключаем модуль path для работы с путями в файловой системе

const HtmlWebpackPlugin = require('html-webpack-plugin') // плагин для генерации html-файла сборки
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // плагин для очистки папки сборки
const Dotenv = require('dotenv-webpack') // плагин для загрузки переменных окружения
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin') // плагин для корректной работы путей из tsconfig.json

module.exports = {
  entry: './src/index.tsx', // точка входа для приложения
  output: {
    filename: 'main.js', // имя файла, в который будет собран бандл
    path: path.resolve(__dirname, 'build'), // путь, куда будет сохранён бандл
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React weather', // заголовок HTML-страницы
      favicon: path.join(__dirname, 'public', 'favicon.ico'), // иконка сайта
      template: path.join(__dirname, 'public', 'index.html'), // шаблон для генерации HTML-страницы
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'], // паттерны для очистки папки сборки
      verbose: true, // вывод сообщений в консоль
    }),
    new Dotenv(), // загрузка переменных окружения из файла .env
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'), // путь к папке, которую должен обслуживать сервер разработки
    },
    port: 3000, // порт, на котором будет работать сервер разработки
    hot: true, // включение горячей перезагрузки модулей
    historyApiFallback: true, // включение поддержки HTML5 History API
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // регулярное выражение для проверки типов файлов, которые будут обрабатываться
        exclude: /node_modules/, // исключение папки node_modules
        use: ['babel-loader'], // список лоадеров, которые будут использоваться для обработки файлов
      },
      {
        test: /\.(png|jpg|svg|webp)$/i, // регулярное выражение для проверки типов изображений, которые будут обрабатываться
        use: [
          {
            loader: 'url-loader', // лоадер, который может загружать изображения как данные URL
            options: {
              limit: 8192, // ограничение размера файла, после которого будет использоваться file-loader
            },
          },
        ],
      },
      {
        test: /\\.(png|jp(e*)g|svg|gif)$/, // регулярное выражение для проверки типов изображений, которые будут обрабатываться
        use: ['file-loader'], // лоадер для загрузки изображений
      },
      {
        test: /\.css$/i, // регулярное выражение для проверки типов CSS-файлов
        use: ['css-loader'], // лоадер для загрузки CSS-файлов
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'], //  Массив extensions позволяет нам указать, какие расширения мы хотим разрешить в нашем проекте.
    plugins: [
      new TsconfigPathsPlugin({ // Здесь мы настраиваем плагины для разрешения путей к модулям TypeScript.
        configFile: './tsconfig.json',  // Мы используем плагин tsconfig-paths-webpack-plugin, который позволяет нам
        extensions: ['.ts', '.tsx'],    // указать пути к модулям TypeScript в нашем проекте с помощью tsconfig.json.
        mainFields: ['browser'],
      }),
    ],
  },
}