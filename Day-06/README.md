# 9. Create Call Stack Execution Diagram for this flow
```js
function f1() {}
function f2() {
    f1();
}
f2();
```

## Call Stack Execution Diagram

| Call Stack |
|:-------:|
| f1() |
| f2() |

# 10. Create Call Stack Execution Diagram for this flow
```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```

## Call Stack Execution Diagram

`step - 01`
| Call Stack |
|:-------:|
| f2() |

`step - 02`
| Call Stack |
|:-------:|
| f1() |
| f3() |

`step - 03`
| Call Stack |
|:-------:|
| f1() |

