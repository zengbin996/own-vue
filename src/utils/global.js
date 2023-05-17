/**
 * 全局方法和对象
 * 2022-04-11 15:34:21
 */

//判断是手机还是电脑
export const IsMedia = () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    return 'm';
  }
  return 'p';
};
