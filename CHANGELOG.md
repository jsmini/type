# Changelog

## 0.12.0 / 2024-5-1

- Update jslib-base 3.0.6

## 0.11.0 / 2023-11-19

- Upgrade jslib-base 2.3.2
- Support sourceMap
- Fix: Support node >=14.0.0

## 0.10.0 / 2023-09-23

- Upgrade to the latest jslib-base
- Support Node.js ESM

## 0.9.2 / 2019-10-10

- Fix: Resolve the issue of missing d.ts

## 0.8.0 / 2019-6-11

- In strict mode, return value of `NaN` changed from `number` to `nan`
- In strict mode, return value of `new Number(NaN)` changed from `Number` to `NaN`

## 0.7.0 / 2019-3-2

- Add .d.ts file to support ts calls

## 0.6.0 / 2018-10-22

- Add strict mode, distinguish between primitive values and object values for numbers, strings, and booleans

## 0.5.0 / 2018-10-22

- Add type support for `new A`, changed from `unknown` to `A`

## 0.4.1 / 2018-10-10

- Fix the error of `type(Object.create(null))` returning `unknown`

## 0.4.0 / 2018-4-6

- Migrate project and change name

## 0.3.0 / 2018-3-32

- Remove babel and special handling for symbol

## 0.2.0 / 2018-3-31

- Native support for IE6-8

## 0.1.0 / 2018-3-17

- Implement type
