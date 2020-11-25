module.exports = {
  root: true, // 以当前目录为根目录，不再向上查找
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // 您的环境变量（包含多个预定义的全局变量）
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 您的全局变量（设置为 false 表示它不允许被重新赋值）
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // 自定义您的规则
    // Customize your rules
    //  0 | 1 | 2  取消 | 警告 | 报错
    // 0 标示忽略问题，等同于'off'
    // 1 标示给出警告，等同于'warn'
    // 2 标示直接报错，等同于'error'
    'no-var': 2, // 禁止使用 var
    quotes: [2, 'single'], // 必须使用单引号
    'no-console': 0, // 禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁止使用debugger，此处配置在生产环境禁止使用
    curly: [2, 'all'], // 必须使用 if(){} 中的{}
    'space-before-function-paren': 0, // 函数定义时括号前面要不要有空格，此处配置可以有空格
    semi: [2, 'always'], // 语句强制分号结尾
    'no-path-concat': 0, // node中不能使用__dirname或__filename做路径拼接
    'no-trailing-spaces': 2, // 每行结束后不同拥有空格
    'no-undef': 0, // 不能有未定义的变量
    'no-with': 2, // 禁用with
    'no-eval': 1, // 禁止使用eval
    'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
    'no-inline-comments': 0, // 禁止行内备注
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off' // 在生产环境中 没有消除定义为使用的变量产生报错
  }
};
