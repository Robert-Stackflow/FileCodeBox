// 存储单位转换
export const getStorageUnit = (value: number) => {
  if (value >= 1024 * 1024 * 1024) {
    return Math.round(value / (1024 * 1024 * 1024)) + 'GB'
  } else if (value >= 1024 * 1024) {
    return Math.round(value / (1024 * 1024)) + 'MB'
  } else {
    return Math.round(value / 1024) + 'KB'
  }
}
