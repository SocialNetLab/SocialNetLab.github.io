---
layout: post
title: [Python] 获取指定路径下的文件列表
categories: Python
description: 给定一个目录root，读取根目录下的文件路径，返回列表
keywords: Python
---

## 需求

给定一个目录root，读取根目录下的文件路径，返回列表

## 代码
```
def get_filelist(root):
    flist = []
    for file in os.listdir(root):
        if os.path.splitext(file)[1] == ".csv":
            flist.append(os.path.join(root, file))
    return flist
```