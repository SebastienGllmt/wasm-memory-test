const WasmModule = import('wasm-module');

import { TextEncoder, TextDecoder } from 'text-encoder';

// patch missing functions
var util = require('util');
util.TextEncoder = TextEncoder;
util.TextDecoder = TextDecoder;

WasmModule
  .then(WasmModule => {
    let i = 0;
    for (let j = 0; j < 100000; j++) {
      try {
        WasmModule.WasmObject.foo();
      } catch (_e) {
        const str = _e.toString();
        console.log(_e);
        if (str.includes('index')) {
          console.log(j);
          break;
        }
      }
      i++;
    }
  })
  .catch(console.error);
