# 调查问卷系统

由 Angular、ng-zorro-antd、nestjs、MySQL 搭建

## 系统设置

时间都是毫秒时间戳

一、问卷信息管理

提供一个链接，链接上有模板 id，打开链接时根据模板 id 获取结构并生成问卷；

前端在提交后以 localStorage 做标记，标记了的不能再提交；

提交到后端时校验，提交时间是否处于模板设置的有效提交时间范围内；模板是否处于分发状态。

提交的数据结构：提交时间，模板 id，提交 id，各题目答案 result（以数组的形式传递）， 是否必填，格式如下：

```js
{
  templateId: 1, // 模板 id
  creatAt: 123781738917, // 提交时间
  id: 1, // 提交的 id，后端自己生成
  result: [ // 提交结果，以题目自身的顺序构成
    {
      type: 'radio',
      value: 'a', // 如果没选就是 ''
    },
    {
      type: 'checkbox',
      value: ['a','b','c'], // 如果没选就是 ''
    },
    {
      type: 'textarea',
      value: '对接拉狂建档立卡就看见', // 如果没选就是 ''
    }
  ]
}
```

二、问卷模板管理

创建时需要这些字段：模板 id，分类 id，标题，创建人 id，创建时间，更新时间，可提交时间范围，状态，数据结构（如下）。

有“保存”操作，可以编辑；有“确定分发”操作，分发了就不能编辑了，才能提交

```js
{
  templateId: 1, // 后端自己生成
  cateId: 2,
  title: '标题 1',
  creatorId: 1,
  creatAt: 1231313131,
  status: 'outgiving', // outgiving - 分发；editting - 编辑中；
  canSumbittedRange: [1231313,2313131], // 可提交时间范围，在范围以外就不能再提交了
  updateAt: 144444342,
  schema: [
    {
      title: '这是单选题',
      type: 'radio',
      isRequired: true,
      options: [
        {
          label: '选项 1',
          value: 'A',
        },
        {
          label: '选项 2',
          value: 'B',
        }
      ]
    },
    {
      title: '这是多选题',
      type: 'checkbox',
      isRequired: true
      options: [
        {
          label: '选项 1',
          value: 'A',
        },
        {
          label: '选项 2',
          value: 'B',
        }
      ]
    },
    {
      title: '这是简单题',
      type: 'textarea',
      isRequired: false
    }
  ]
}
```

三、问卷分类管理

分类名，id，创建人，创建时间，结构如下：

```js
{
  cateId: 1, // 后端自己生成
  cateName: '分类 1',
  creatorId: 1,
  creatAt: 12313131,
}
```

四、问卷结果统计

提供一个拥有该 id 链接的地址查看结果（便于不用登录系统就可查看结果）；

以问卷 templateId 进行检索，找到提交的答案，汇总单个题目的所有答案，忽略没有答案的，生成统计数据，比如：

1. 早上喜欢吃什么？

   | A.吃饭 | B.吃面 | C.吃馍 |
   | ------ | ------ | ------ |
   | 10     | 40     | 10     |

2. 中午喜欢吃什么？

   | A.吃饭 | B.吃面 | C.吃馍 |
   | ------ | ------ | ------ |
   | 40     | 20     | 10     |

五、系统管理

问卷信息管理、问卷模板管理、问卷分类管理、问卷结果统计、用户管理；大多是列表页，问卷模板有创建编辑页，用户管理可以编辑信息

六、用户管理

系统管理员和问卷管理员；问卷管理员登录了该系统即可对问卷进行管理
