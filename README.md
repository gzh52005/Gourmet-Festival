README.md
项目名称：美食杰
演示
官网：https://m.meishij.net/
上线地址：
后台管理系统地址 : 
git仓库地址：

团队和分工
组长：谭铭杰
组员：张慧,朱绍良,黄承腾
负责模块：

- 张慧： 



- 谭铭杰：



- 朱绍良：

- 黄承腾:

项目页面截图:

项目目录说明
//apiserver目录结构(后端)
    ├─router
    |  ├─module
    │  |	├─appgoodslist.js （移动端商品接口）
    │  |	├─orders.js （订单接口）
    │  |	├─users.js（用户管理接口）
    │  |	└─token.js （token工具）
    |  └threeModule(第三方接口文件夹)
    │  		└─cart （购物车接口）
    └─db （数据库操作封装）
        ├─datamock(生成假数据) 
        └─mongo(数据库方法) 

//system（后台管理系统）
├─api         (接口文件)
├─components  (组件)
│  └─navBar
├─css         (样式)
│  └─users
├─store       (公共状态仓库)
│  ├─actions
│  └─reducers
├─untils      (各种封装的函数)
└─views       (模块组件)
    ├─App
    ├─index
    ├─login
    ├─menu
    ├─route
    └─users
    

//app（客户端）

├─api   (接口文件)
├─style (样式)
├─utils (公共工具)
└─views (模块组件)
    ├─caidan
    ├─fenlei
    ├─login
    ├─reg
    ├─shipin
    ├─shouc
    └─tuijian (推荐页)
        ├─bannar
        ├─silde
        ├─three
        ├─tjlinks
        └─waterfall





