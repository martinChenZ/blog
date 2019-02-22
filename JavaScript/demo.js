// 事件队列
const eventQueue = {};

export default {
  // 监听
  on: (name, callback) => {
    // 必须从 EVENTS 引入事件，避免事件到处监听
    // if (!Object.values(EVENTS).includes(name))
    //   return console.error('无法监听不存在的事件：可用事件 EVENTS:', EVENTS);

    if (!eventQueue[name]) {
      eventQueue[name] = [];
    }

    eventQueue[name].push(callback)
  },

  // 触发
  emit: (name, ...args) => {
    // if (!Object.values(EVENTS).includes(name))
    //   return console.error('无法触发不存在的事件：', name);

    (eventQueue[name] || []).forEach((callback) => {
      // 触发事件
      callback(...args);
    })
  },

  // 移除
  remove: (name, callback = false) => {
    if (!eventQueue[name]) return;
    // 清除所有事件
    if (arguments.length === 1) eventQueue[name] = [];
    // 过滤掉需要删除的事件
    eventQueue[name] = (eventQueue[name] || []).filter((cb) => {
      return cb !== callback;
    })
  }
}
