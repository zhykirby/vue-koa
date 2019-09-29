# vue-koa
## **vue.js&koa.js** basic config  
配置了**vue**和**koa2**,分别放在client和server  
基于前后端分离的思路  
通过设置config的proxy地址、origin解决跨域问题。  
开箱即用，client写前端vue组件，server在controller写后端api即可。
## 安装
git clone后  
在client和server下分别
```
npm install
```
## 启动
前端
```
npm start
```
后端  
pm2开启
```
$ pm2 start --name name npm -- run start
```
