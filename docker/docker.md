# docker安装文档
* 系统centos7 

## 安装

### 安装必要软件
> $ sudo yum install -y yum-utils device-mapper-persistent-data lvm2

### 添加软件源信息
> $ sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

### 更新 yum 缓存
> $ sudo yum makecache fast

### 安装 Docker-ce
> $ sudo yum -y install docker-ce


## 操作
### 启动docker 后台服务
> $ sudo service docker start
### 查看镜像
> $ docker images
### 查看docker
> $ docker ps

### docker attach进入该容器
> $ sudo docker attach 44fc0f0582d9
### docker 退出不关闭窗口
方法一：如果要正常退出不关闭容器，请按Ctrl+P+Q进行退出容器
### 退出容器
方法二：如果使用exit退出


docker run -d -p 1988:1988 oddrationale/docker-shadowsocks -s 0.0.0.0 -p 1988 -k kl2426 -m aes-256-cfb