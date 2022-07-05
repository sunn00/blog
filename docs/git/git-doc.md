---
title: "git基本操作"
date: 2021-12-22
sidebar: "auto"
categories:
  - 前段工具
tags:
  - Git
---



#### Git版本控制

***

##### 产品级分支模型

常驻分支(一旦创建不会更改)：

development                    -- 从master分支创建

production(master)         -- 默认分支

 

活动分支(随需求一直更改)：

feature                               -- 特性分支，从development创建

hotfix                                  -- 热修复分支，从master创建

release                                -- 预发布分支，从development创建



#### GIT命令

***

##### 基本操作

###### git help 

帮助文档

- git help <commond>


- git <commond> -h




###### git config 

用户配置

- git config -- global user.name "xxxxx"


- git config -- global user.email "xxxxx"
- git config --list：查看已有的配置信息



三个配置级别：

1. --local 【默认，高优先级】：只影响本仓库      .git/config
2. --global 【中优先级】：影响到所有当前用户的git仓库     ~/.gitconfig
3. --system 【低优先级】： 影响到全系统的git仓库     /etc/gitconfig



###### git init

 初始化仓库

- git init [path]


- git init [path] --bare




###### git status  

找出工作区间的状态区别

未跟踪       <->      跟踪           ：文件状态 

工作目录   <->      暂存区       ：内容状态

暂存区       <->      最新提交   ：内容状态



###### git add [path]

添加文件内容到**暂存区**（同时文件被跟踪）        



###### .gitignore 

忽略文件

- 在添加时忽略匹配的文件

- 仅作用于**未追踪的文件**



###### git -rm 

从暂存区删除

- 仅从暂存区删除：	git rm --cached
- 从暂存区与工作目录删除：	git rm
- 删除所有被跟踪，但是在工作目录被删除的文件：	git rm $(git ls-files --deleted)



###### git commit 

根据暂存区内容创建一个提交记录

- git commit -m 'xxxxx' ： 对提交内容进行注释
- git commit -a -m 'xxxxx'：将工作目录的内容直接提交到提交区，相当于 git add . ，git commit -m 'xxxx'



###### git log 

显示提交历史信息



消息类型：

commit: 【SHA-1编码的HASH标示符】

Author: 【git -config 配置的提交者信息】

Date: 【日期信息】

【commit注释信息】



- git log --oneline：    只展示7位hash编码与注释
- git log --color --graph 



###### git alias 

别名命令

git config alias.shortname <fullcommand>



常用别名配置：

- co = checkout
- rmd = git rm $(git ls-files --deleted)
- po = push
- ci = commit



###### git diff 

显示不同版本差异

- git diff：    工作目录与暂存区的差异
- git diff -cached [<reference>]：   暂存区与某次提交差异，默认为HEAD
- git diff<reference>：   工作目录与某次提交的差异



###### git checkout & git reset

撤销修改

- 撤销本地修改，将文件内容从暂存区复制到工作目录： git checkout -- <file>
- 撤销暂存区内容，将文件内容从上次提交复制到暂存区：   git reset HEAD <file>
- 撤销全部改动，将内容从上次提交复制到工作目录：    git checkout HEAD -- <file>

<img src="/Users/sunruonan/Desktop/前端学习/images/IMG_0768.PNG" alt="IMG_0768" style="zoom:33%;" />



***

##### 分支操作

tip: 

1. 所有提交跟着HEAD走



###### git branch

负责分支的增删查改

- git branch <branchName> ：创建一个分支
- git branch  -d <branchName>：删除指定分支
- git branch -v：查看所有分支



###### git checkout 

通过移动HEAD检出版本，可用于分支切换

- git checkout <branchName>：HEAD直接指向该分支
- git checkout -b <branchName>：创建并指向该分支
- git checkout <refrence>：
- git checkout - ：回到上一个分支



###### git reset

将当前分支回退到某个历史版本

- git reset --mixed <commit> （默认）：保留工作目录，并清空暂存区
- git reset --soft <commit>：保留工作目录，并把重置 HEAD 所带来的新的差异放进暂存区
- git reset --hard <commit>：重置暂存区和工作区，所有add和工作目录的改动都会被清除



使用捷径(避免hash不直观)：

- A^：   A上的前一次提交
- A~n：   在A之前的第n次提交



###### git reflog

按序排列所有你经过的分支



###### git stash

保存目前的工作目录和暂存区状态，并返回到干净的工作区

- git stash list ：查看当前的stash栈
- git stash save 'xxxx'：通过注释存储stash
- git stash apply stash@{n}：应用第n个stash记录
- git stash drop stash@{n}：删除第n个stash记录
- git stash pop：应用第一个stash记录，并删除该记录



###### git merge <toBranch> <formBranch>

合并分支【三方合并】，会生成一个合并记录



###### git rebase

修剪提交历史基线，将变更commit重演（commit hash值会变），不会生成提交记录，分支为线性的



###### git tag <tagName> <commitHash>

对某个提交设置一个不变的别名，常在发布后设置，可以通过标签名直接checkout



***

##### 远程操作

###### git pull 

从远程仓库拉取到本地，等同于git fetch + git merge



###### git clone

克隆远程仓库到本地



###### git push

将本地历史提交到远程分支



###### git remote

进行远程仓库配置

- git remote -v： 查看所有远程仓库配置
- git remote show <remote> 查看某个远程仓库的信息
- git remote add <shortname> <url>：添加远程版本库
- git remote rm name：删除远程仓库
- Git remote rename <old_name> <new_name>



