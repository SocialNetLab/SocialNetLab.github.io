---
layout: post
title: Blog | Github博客后如何实现本地预览？Ruby
categories: Blog
description: 安装Ruby和RubyGems（包管理器）
keywords: 
---


## Jrkyll搭建的Github博客的本地预览

Step 1. 下载和安装Ruby

简介：Ruby，一种为简单快捷面向对象编程而创的脚本语言。

安装地址：http://www.ruby-lang.org/en/downloads/

Windows安装地址：https://rubyinstaller.org/downloads/

网站会加粗推荐最适合的版本：

![Github-Blog-localhost](/images/posts/ruby-installers.jpg)

傻瓜式的 “下一步” 安装方式


Step 2. 下载和安装 RubyGems

简介： RubyGems（简称 gems）是一个用于对 Rails 组件进行打包的 Ruby 打包系统。 它提供一个分发 Ruby 程序和库的标准格式，还提供一个管理程序包安装的工具。

下载Zip压缩包：https://rubygems.org/pages/download

解压缩到指定路径，如: C:\Users\yatiki\Downloads\rubygems-3.4.3

Windows系统下，使用快捷键“Win + R”，输入“cmd”，按下回车键，弹出命令行

- 在命令行切换路径：


```
cd C:\Users\yatiki\Downloads\rubygems-3.4.3
```


- 在命令行运行安装：

```
ruby setup.rb
```

- 在命令行安装jekyll：

```
gem install jekyll
```


Step 3. 运行本地博客

- 切换路径到本地博客安装位置

- 输入 ```jekyll server``` 或者 ```bundle exec jekyll serve```

- 如果报错 command not found: jekyll， 可能是gem没成功安装jeyll，手动下载安装包

https://rubygems.org/gems/jekyll/versions

下载按钮在链接右下方的友情链接那里...

<img src="/images/posts/ruby-gem-jeykll-download.png" style="border: 1px solid black">

- 成功运行jekyll后，打开浏览器地址栏，输入 http://127.0.0.1:4000/


