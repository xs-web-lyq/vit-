console.log("arguments", arguments);

// arguments [Arguments] {
//   '0': {},
//   '1': [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },
//     main: {
//       id: '.',
//       path: 'D:\\vite\\test-path\\src',
//       exports: {},
//       filename: 'D:\\vite\\test-path\\src\\main.js',
//       loaded: false,
//       children: [],
//       paths: [Array]
//     },
//     extensions: [Object: null prototype] {
//       '.js': [Function (anonymous)],
//       '.json': [Function (anonymous)],
//       '.node': [Function (anonymous)]
//     },
//     cache: [Object: null prototype] {
//       'D:\\vite\\test-path\\src\\main.js': [Object]
//     }
//   },
//   '2': {
//     id: '.',
//     path: 'D:\\vite\\test-path\\src',
//     exports: {},
//     filename: 'D:\\vite\\test-path\\src\\main.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'D:\\vite\\test-path\\src\\node_modules',
//       'D:\\vite\\test-path\\node_modules',
//       'D:\\vite\\node_modules',
//       'D:\\node_modules'
//     ]
//   },
//   '3': 'D:\\vite\\test-path\\src\\main.js',
//   '4': 'D:\\vite\\test-path\\src'
// }

// 再node环境下运行的代码会被添加到下面的立即执行函数中有五个参数可以使用。
(function (exports, require, module, __filename, __dirname) {
  console.log("__dirname", __dirname);
})();
