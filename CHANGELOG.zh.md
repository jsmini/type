# 变更日志

## 0.12.0 / 2024-5-1

- update jslib-base 3.0.6

## 0.11.0 / 2023-11-19

- 升级 jslib-base 2.3.2
- 支持 sourceMap
- fix: 支持 node >=14.0.0

## 0.10.0 / 2023-09-23

- 升级最新版 jslib-base
- 支持 Node.js ESM

## 0.9.2 / 2019-10-10

- fix: 修复丢失d.ts的问题

## 0.8.0 / 2019-6-11

- 严格模式下，`NaN`的返回值由`number`变更为`nan`
- 严格模式下，`new Number(NaN)`的返回值由`Number`变更为`NaN`

## 0.7.0 / 2019-3-2

- 增加.d.ts文件，支持ts调用

## 0.6.0 / 2018-10-22

- 增加严格模式，区分数字，字符串，布尔类型的原始值和对象值

## 0.5.0 / 2018-10-22

- 添加`new A`的类型支持，由`unknow`变更为`A`

## 0.4.1 / 2018-10-10

- 修复 `type(Object.create(null))` 为`unknown`的错误

## 0.4.0 / 2018-4-6

- 迁移项目，更改名称

## 0.3.0 / 2018-3-32

- 去掉babel，去掉对symbol的特殊处理

## 0.2.0 / 2018-3-31

- 原生支持ie6-8

## 0.1.0 / 2018-3-17

- 实现 type
