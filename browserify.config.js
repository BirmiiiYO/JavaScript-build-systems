const { build } = require('esbuild');

build({
  entryPoints: ['src/index.js'], // Входной файл
  outfile: 'dist/bundle.js', // Выходной файл
  bundle: true, // Указываем, что нужно собрать все модули в один файл
  minify: true, // Указываем, что нужно минифицировать код
  sourcemap: true, // Генерировать sourcemaps для отладки
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'], // Указываем целевые браузеры
  loader: { // Список лоадеров, которые будут применены к модулям
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
    '.css': 'css',
    '.scss': 'sass',
    '.less': 'less'
  },
  plugins: [], // Список плагинов
}).catch(() => process.exit(1));