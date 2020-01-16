# Installation

```
# install rustup
curl https://sh.rustup.rs -sSf | sh
# use nightly version
rustup install nightly-2018-06-05
rustup target add wasm32-unknown-unknown --toolchain nightly
```

then run the `./build` script