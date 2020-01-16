extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct WasmObject();
#[wasm_bindgen]
impl WasmObject {
    pub fn foo() -> Result<(), JsValue> {
        "foo".to_string(); // removing this lines stops the memory leak
        Err(JsValue::from_str(""))
    }
}
