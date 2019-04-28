import mockjs from 'mockjs';
import getSign from './sign/sign';
import aes from './aes/public';
let headParams={};
/*headParams = JSON.parse(localStorage.getItem('headParams'));
headParams.partner_id = aes.Decrypt(headParams.partner_id);
signParams = {
  service,
  ...headParams,
  ...params,
};*/
export default {
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|10': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  })
};