<div align="center">
<p><img width="150" src="https://avatars0.githubusercontent.com/u/25151659?s=460&v=4"></p>

<h1>cos-electron</h1>

<p>
   <strong>electron脚手架模版</strong>,
</p>

<p>
  <sub>Made with ❤︎ by
    <a href="https://github.com/Ikarows">Ikarows</a>
  </sub>
</p>

<img src="https://shields.io/badge/node-%3E%3D%2016.0.0-brightgreen">
<img src="https://img.shields.io/badge/electron-26.2.0-brightgreen">
<img src="https://img.shields.io/badge/electron_icon_builder-2.0.1-brightgreen">
</div>

<br>
<br>

## 项目地址

```shell
git clone https://github.com/Ikarows/cos-electron.git
```

<br />

## 开发

```bash

# install cnpm
npm install cnpm -g --registry=https://registry.npm.taobao.org;

# 1. install dependencies
cnpm i

# 2. install electron-icon-builder
cnpm i electron-icon-builder --svae

# 3. 生成应用图标
npm run electron:generate-icons

# strat
npm run start

# build
npm run build
```

## 修改自定义网址

- index.js 文件中配置

**例子如下**

```javascript
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920, //404,
    height: 1080, //763,
    maximizable: true, //支持最大化
    icon: "https://medical.3vyd.com/alk/prod/pc/icon/icon.ico"
  })
  
  win.setMenu(null)
  win.loadURL('http://www.baidu.com')
}
```

## 常见问题
- 1.electron-builder打包electron-v13.6.9-win32-x64.zip下载失败
![Image text](https://img-blog.csdnimg.cn/aebb64b00d6e4989ae8ce6470f719e5e.png#pic_center)

```
请根据报错信息版本[url](https://github.com/electron/electron/releases/tag/v31.1.0)
下载后找到以下位置，将压缩包解压到electron的cache文件夹中。
C:\Users\admin\AppData\Local\electron\Cache
![Image text](https://img-blog.csdnimg.cn/aebb64b00d6e4989ae8ce6470f719e5e.png#pic_center](https://img-blog.csdnimg.cn/a995d138894442acb9eb59a81945c51c.png#pic_center)
```
