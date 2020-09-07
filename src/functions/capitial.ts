function capitial(str: string) {
  // 正则法
  str = str.toLowerCase();
  const reg = /\b(\w)|\s(\w)/g; //   \b判断边界\s判断空格
  return str.replace(reg, function (m) {
    return m.toUpperCase();
  });
}
export default capitial;
