module.exports = {
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'], // 分号
    'comma-dangle': ['warn', 'always-multiline'], // 要求或禁止使用拖尾逗号
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always', // 匿名函数前必须有空格
        named: 'never', // 具名函数前不能有空格
        asyncArrow: 'always', // 箭头函数前必须有空格
      },
    ], // 要求或禁止函数圆括号之前有一个空格
    'arrow-parens': ['warn', 'as-needed'], // 要求箭头函数的参数使用圆括号
  },
};
