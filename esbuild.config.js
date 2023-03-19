const path = require('path'); // подключаем модуль path для удобной работы с путями
const { nodeResolvePlugin } = require('esbuild-plugin-node-resolve'); // подключаем плагин для esbuild, который позволяет резолвить зависимости
const { sassPlugin } = require('esbuild-plugin-sass'); // подключаем плагин для esbuild, который позволяет компилировать SASS в CSS

module.exports = {
  entryPoints: ['./src/index.js'], // точка входа для сборки
  outdir: './public/build', // директория, в которую будут сохраняться результаты сборки
  bundle: true, // указываем, что нужно создать единый бандл со всеми зависимостями
  minify: true, // указываем, что нужно минифицировать код
  plugins: [nodeResolvePlugin(), sassPlugin()], // добавляем плагины для esbuild
  define: {
    'process.env.NODE_ENV': '"production"', // устанавливаем значение переменной окружения NODE_ENV в production
  },
  jsxFactory: 'React.createElement', // указываем название функции, которую нужно использовать для создания JSX-элементов
  jsxFragment: 'React.Fragment', // указываем название компонента-фрагмента, который нужно использовать для оборачивания нескольких JSX-элементов
  sourcemap: true, // указываем, что нужно генерировать sourcemap
  tsconfig: path.resolve(__dirname, './tsconfig.json'), // указываем путь до конфигурационного файла TypeScript
};
