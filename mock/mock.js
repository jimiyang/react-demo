import mockjs from 'mockjs';
const testArr = [
  {cityname: '北京'},
  {cityname: '天津'},
  {cityname: '河北'},
  {cityname: '河南'},
  {cityname: '山西'},
  {cityname: '山东'}
];
export default {
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|5': [{ name: '@city', 'value|1-50': 20}]
  }),
  'POST /api/edit': {userId: 1},
  'GET /api/cityList': testArr
};