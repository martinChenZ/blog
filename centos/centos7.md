## centos 常用命令
* 
Linux centos重启命令： 
　　1、reboot   普通重启    
　　2、shutdown -r now 立刻重启(root用户使用) 
　　3、shutdown -r 10 过10分钟自动重启(root用户 使用) 
　　4、shutdown -r 20:35 在时间为20:35时候重启(root用户使用) 
　　如果是通过shutdown命令设置重启的话，可以用shutdown -c命令取消重启 
　Linux centos关机命令：
　　1、halt 立刻关机
　　2、poweroff 立刻关机
　　3、shutdown -h now 立刻关机(root用户使用)
　　4、shutdown -h 10 10分钟后自动关机


## CentOS开启SSH Server服务

1、登录 

2、查看SSH是否安装。

 　　输入命令：rpm -qa | grep ssh
 　　注：若没安装SSH则可输入：yum install openssh-server安装。

 3、启动SSH服务。

 　　输入命令：service sshd restart  重启SSH服务。
 　　命令：service sshd start 启动服务 |  命令：service sshd stop 停止服务 
 　　重启后可输入：netstat -antp | grep sshd 查看是否启动22端口（可略）。
 
 4、如何设置SSH服务为开机启动？

 　　输入命令：chkconfig sshd on 即可。
 　　注：若是chkconfig sshd off则禁止SSH开机启动。


 CentOS 7 下，如何设置DNS服务器
在CentOS 7下，手工设置 /etc/resolv.conf 里的DNS，过了一会，发现被系统重新覆盖或者清除了。和CentOS 6下的设置DNS方法不同，有几种方式： 1、使用全新的命令行工具 nmcli 来设置

#显示当前网络连接
#nmcli connection show
NAME UUID                                 TYPE           DEVICE
eno1 5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03 802-3-ethernet eno1

#修改当前网络连接对应的DNS服务器，这里的网络连接可以用名称或者UUID来标识
#nmcli con mod eno1 ipv4.dns "114.114.114.114 8.8.8.8"

#将dns配置生效
#nmcli con up eno1
2、使用传统方法，手工修改 /etc/resolv.conf

修改 /etc/NetworkManager/NetworkManager.conf 文件，在main部分添加 “dns=none” 选项：
[main]
plugins=ifcfg-rh
dns=none
NetworkManager重新装载上面修改的配置
# systemctl restart NetworkManager.service
手工修改 /etc/resolv.conf
nameserver 114.114.114.114
nameserver 8.8.8.8







查看当前路径命令：pwd