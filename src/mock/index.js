import Mock from 'mockjs';

Mock.setup({ timeout: 800});

// MOCK接口
let login = require('./login.json');
Mock.mock(/..\/login/, 'post', login);