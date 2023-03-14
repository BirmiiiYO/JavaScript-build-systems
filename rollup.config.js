import path from 'path' // импортируем модуль path из Node.js, который позволит нам работать с путями к файлам

import babel from '@rollup/plugin-babel' // импортируем плагин Babel для Rollup, который позволит нам транспилировать код с использованием современных возможностей JavaScript в более старые версии для более широкой поддержки браузеров
import peerDepsExternal from 'rollup-plugin-peer-deps-external' // импортируем плагин rollup-plugin-peer-deps-external, который позволяет исключить peerDependencies из итоговой сборки
import resolve from '@rollup/plugin-node-resolve' // импортируем плагин rollup-plugin-node-resolve, который позволяет Rollup находить модули в node_modules и разрешать зависимости
import commonjs from '@rollup/plugin-commonjs' // импортируем плагин rollup-plugin-commonjs, который позволяет Rollup преобразовывать модули CommonJS в ES модули
import image from '@rollup/plugin-image' // импортируем плагин rollup-plugin-image, который позволяет Rollup импортировать изображения и другие файлы в код
import svgr from '@svgr/rollup' // импортируем плагин @svgr/rollup, который позволяет Rollup импортировать SVG-изображения как компоненты React
import alias from '@rollup/plugin-alias' // импортируем плагин rollup-plugin-alias, который позволяет создавать псевдонимы для путей к модулям

const projectRootDir = path.resolve(__dirname) // определяем путь к корневой директории проекта

export default {
  input: 'src/index.ts', // определяем входной файл для Rollup, который содержит точку входа в нашем приложении
  output: {
    name: 'index', // задаем имя итогового модуля
    file: 'lib/index.js', // задаем путь к итоговому файлу, который будет сгенерирован Rollup
    format: 'esm', // задаем формат итогового файла (ES модули)
    globals: { react: 'React', 'react-dom': 'ReactDom' }, // определяем глобальные переменные, которые могут быть использованы в итоговом файле
  },
  plugins: [
    image(), // используем плагин rollup-plugin-image, чтобы обрабатывать импорты изображений
    svgr(), // используем плагин @svgr/rollup, чтобы обрабатывать импорты SVG-изображений
    babel({ // используем плагин @rollup/plugin-babel, чтобы транспилировать код
      exclude: 'node_modules/**', // исключаем из обработки файлы, находящиеся в директории node_modules
    }),
    alias({ // используем плагин rollup-plugin-alias, чтобы создавать псевдонимы для путей к модулям
      entries: [
        {
          find: '@', // указываем паттерн для поиска псевдонимов
          replacement: path.resolve(
            projectRootDir,
            './src', // заменяем найденный паттерн на путь к директории src в корневой директории проекта
          ),
        },
      ],
    }),
    peerDepsExternal(), // используем плагин rollup-plugin-peer-deps-external, чтобы исключить peerDependencies из итоговой сборки
    commonjs(), // используем плагин rollup-plugin-commonjs, чтобы преобразовывать модули CommonJS в ES модули
    resolve(), // используем плагин rollup-plugin-node-resolve, чтобы Rollup мог разрешать зависимости
],
external: ["styled-components"], // указываем список зависимостей, которые необходимо исключить из итоговой сборки
}