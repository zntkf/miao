var zntkf = {
  /**
   * 将分组按size一组分成若干分组
   * @param {Array} array 将被分组的数组
   * @param {Array} size  被分的数量
   * @returns {Array} 分好的数组
   * @example
    *var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
  */
  chunk: function (array, size = 1) {
    if (!array || size < 1) { //排除边缘空数组 或size < 1
      return []
    }
    if (size >= array.length) { //排除size > 数组长度
      return array
    }
    var res = []
    while (array.length > 0) {
      var item = []
      for (var i = 0; i < size; i++) {
        if (array.length > 0) {
          item.push(array[0])
          array.shift()
        } else {
          res.push(item)
          return res
        }
      }
      res.push(item)
      item = []
    }
    return res
  },

  //res.push(ary[i] == (false || null || undefined || NaN || "" || 0) ? continue : ary[i])
  compact: function (ary) {
    if (ary.length == 0) {
      return []
    }
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        res.push(ary[i])
      }
    }
    return res
  },

  difference: function (array, ...values) {
    if (!array) {
      return array
    }
    var res = []
    var index = 0

  },
  differenceBy: function () {

  },
  differenceWith: function () {

  },

  drop: function () {

  },


  dropRight: function () {

  },




  dropRightWhile: function () {

  },
  dropWhile: function () {

  },
  fill: function () {

  },
  findIndex: function () {

  },
  indLastIndex: function () {

  },
  findLastIndex: function () {

  },



  flatten: function () {

  },


  flattenDeep: function () {

  },



  flattenDepth: function () {

  },


  fromPairs: function () {

  },



  head: function () {

  },



  indexOf: function () {

  },


  initial: function () {

  },


  intersection: function () {

  },
  intersectionBy: function () {

  },
  intersectionWith: function () {

  },



  join: function () {

  },



  last: function () {

  },


  lastIndexOf: function () {

  },


  nth: function () {

  },

  pull: function () {

  },
  pullAll: function () {

  },
  pullAllBy: function () {

  },
  pullAllWith: function () {

  },
  remove: function () {

  },



  reverse: function () {

  },




  slice: function () {

  },
  sortedIndex: function () {

  },
  sortedIndexBy: function () {

  },
  sortedIndexOf: function () {

  },
  sortedLastIndex: function () {

  },
  sortedLastIndexBy: function () {

  },
  sortedLastIndexOf: function () {

  },
  sortedUniq: function () {

  },
  sortedUniqBy: function () {

  },
  tail: function () {

  },
  take: function () {

  },
  takeRight: function () {

  },
  takeRightWhile: function () {

  },
  takeWhile: function () {

  },
  union: function () {

  },
  unionBy: function () {

  },
  unionWith: function () {

  },
  uniqWith: function () {

  },
  uniq: function () {

  },
  uniqBy: function () {

  },
  unzip: function () {

  },
  unzipWith: function () {

  },


  without: function () {

  },


  xor: function () {

  },
  xorBy: function () {

  },
  xorWith: function () {

  },
  zipObject: function () {

  },
  zipObjectDeep: function () {

  },
  zipWith: function () {

  },
  zip: function () {

  },
  countBy: function () {

  },
  every: function () {

  },
  filter: function () {

  },
  find: function () {

  },
  findLast: function () {

  },
  flatMap: function () {

  },
  flatMapDeep: function () {

  },
  flatMapDepth: function () {

  },
  forEach: function () {

  },
  forEachRight: function () {

  },
  groupBy: function () {

  },
  includes: function () {

  },
  invokeMap: function () {

  },
  keyBy: function () {

  },
  map: function () {

  },
  orderBy: function () {

  },
  partition: function () {

  },
  reduce: function () {

  },
  reduceRight: function () {

  },
  reject: function () {

  },
  sample: function () {

  },
  sampleSize: function () {

  },
  shuffle: function () {

  },
  size: function () {

  },
  some: function () {

  },
  sortBy: function () {

  },
  defer: function () {

  },
  delay: function () {

  },
  castArray: function () {

  },
  conformsTo: function () {

  },
  eq: function () {

  },
  gt: function () {

  },
  gte: function () {

  },
  isArguments: function () {

  },
  isArray: function () {

  },
  isArrayBuffer: function () {

  },

  isArrayLike: function () {

  },
  isArrayLikeObject: function () {

  },
  isBoolean: function () {

  },
  isBoolean: function () {

  },
  isDate: function () {

  },
  isElement: function () {

  },

  isEmpty: function () {

  },
  isEqual: function () {

  },
  isEqualWith: function () {

  },
  isError: function () {

  },
  isFunction: function () {

  },
  isInteger: function () {

  },
  isLength: function () {

  },
  isMap: function () {

  },
  isMatch: function () {

  },
  isMatchWith: function () {

  },
  isNaN: function () {

  },

  isNil: function () {

  },
  isNative: function () {

  },
  isNull: function () {

  },
  isNumber: function () {

  },
  isObject: function () {

  },
  isObjectLike: function () {

  },
  isPlainObject: function () {

  },

  isRegExp: function () {

  },
  isSafeInteger: function () {

  },
  isSet: function () {

  },
  isString: function () {

  },
  isSymbol: function () {

  },
  isTypedArray: function () {

  },
  isUndefined: function () {

  },
  isWeakMap: function () {

  },
  isWeakSet: function () {

  },
  lt: function () {

  },
  lte: function () {

  },
  toArray: function () {

  },
  toFinite: function () {

  },

  toInteger: function () {

  },
  toLength: function () {

  },
  toNumber: function () {

  },
  assign: function () {

  },
  toSafeInteger: function () {

  },
  add: function () {

  },

  ceil: function () {

  },
  divide: function () {

  },
  floor: function () {

  },
  max: function () {

  },
  maxBy: function () {

  },
  mean: function () {

  },
  meanBy: function () {

  },

  min: function () {

  },
  minBy: function () {

  },
  multiply: function () {

  },
  round: function () {

  },
  subtract: function () {

  },



  sumBy: function () {

  },
  sum: function () {

  },
  clamp: function () {

  },
  inRange: function () {

  },
  random: function () {

  },
  assignIn: function () {

  },
  at: function () {

  },
  defaults: function () {

  },
  defaultsDeep: function () {

  },
  findKey: function () {

  },
  findLastKey: function () {

  },
  forIn: function () {

  },
  forInRight: function () {

  },
  forOwn: function () {

  },
  forOwnRight: function () {

  },
  functions: function () {

  },
  functionsIn: function () {

  },
  get: function () {

  },
  has: function () {

  },
  hasIn: function () {

  },
  invert: function () {

  },
  invertBy: function () {

  },
  keys: function () {

  },
  keysIn: function () {

  },
  mapKeys: function () {

  },
  mapValues: function () {

  },
  merge: function () {

  },

  mergeWith: function () {

  },
  omit: function () {

  },
  omitBy: function () {

  },

  pick: function () {

  },
  pickBy: function () {

  },
  result: function () {

  },
  set: function () {

  },
  setWith: function () {

  },
  toPairs: function () {

  },
  toPairsIn: function () {

  },
  transform: function () {

  },
  unset: function () {

  },
  update: function () {

  },
  updateWith: function () {

  },
  values: function () {

  },
  valuesIn: function () {

  },
  camelCase: function () {

  },

  capitalize: function () {

  },
  deburr: function () {

  },
  endsWith: function () {

  },
  deburr: function () {

  },
  escape: function () {

  },
  escapeRegExp: function () {

  },
  kebabCase: function () {

  },
  lowerCase: function () {

  },
  pad: function () {

  },
  padEnd: function () {

  },
  padStart: function () {

  },

  repeat: function () {

  },
  replace: function () {

  },
  snakeCase: function () {

  },
  split: function () {

  },
  startCase: function () {

  },
  startsWith: function () {

  },
  toLower: function () {

  },
  toUpper: function () {

  },
  trim: function () {

  },
  trimEnd: function () {

  },
  trimStart: function () {

  },
  truncate: function () {

  },
  unescape: function () {

  },
  upperCase: function () {

  },
  upperFirst: function () {

  },
  words: function () {

  },
  bindAll: function () {

  },
  defaultTo: function () {

  },
  range: function () {

  },
  rangeRight: function () {

  },
  mixin: function () {

  },
  times: function () {

  },
  toPath: function () {

  },
  uniqueId: function () {

  },
  cloneDeep: function () {

  },
  uniqueId: function () {

  },
  identity: function () {

  },
  concat: function () {

  },
  pullAt: function () {

  },
  matches: function () {

  },
  property: function () {

  },
  ary: function () {

  },
  unary: function () {

  },
  negate: function () {

  },
  once: function () {

  },
  spread: function () {

  },
  curry: function () {

  },
  memoize: function () {

  },
  flip: function () {

  },
  conforms: function () {

  },
  constant: function () {

  },
  flow: function () {

  },
  method: function () {

  },
  methodOf: function () {

  },
  nthArg: function () {

  },
  propertyOf: function () {

  },
  parseJson: function () {

  },
  stringifyJson: function () {

  },

}
