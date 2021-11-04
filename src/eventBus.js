// import Vue from 'vue';
import emitter from 'tiny-emitter/instance'

// EventBus
// const EventBus = new Vue();

// export default EventBus;

export default {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args)
  }
