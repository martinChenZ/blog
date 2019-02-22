# git 常用命令
## 查看本地已有的分支
>`$ git branch`
 
## 查看本地与远程分支
>`$ git branch -a`

## 删除远程分支
> git push origin --delete Chapater6

* (前面带 * 号的代表当前目录所处的分支)

## 用远程覆盖本地
>`$ git reset --hard origin/master` 

或者


>`$ git fetch --all` 

>`$ git reset --hard origin/master`



## 查看GIT树
> `$ git log --pretty=format:"%h %s" --graph`