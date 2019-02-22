# Git各开发分支管理规范
## Git的优点
- Git的优点很多，但是这里只列出我认为非常突出的几点。

由于是分布式，所有本地库包含了远程库的所有内容。
优秀的分支模型，打分支以及合并分支，机器方便。
快速，在这个时间就是金钱的时代，Git由于代码都在本地，打分支和合并分支机器快速，使用个SVN的能深刻体会到这种优势。
版本管理的挑战
虽然有这么优秀的版本管理工具，但是我们面对版本管理的时候，依然有非常大得挑战，我们都知道大家工作在同一个仓库上，那么彼此的代码协作必然带来很多问题和挑战，如下：

如何开始一个Feature的开发，而不影响别的Feature？
由于很容易创建新分支，分支多了如何管理，时间久了，如何知道每个分支是干什么的？
哪些分支已经合并回了主干？
如何进行Release的管理？开始一个Release的时候如何冻结Feature, 如何在Prepare Release的时候，开发人员可以继续开发新的功能？
线上代码出Bug了，如何快速修复？而且修复的代码要包含到开发人员的分支以及下一个Release?
大部分开发人员现在使用Git就只是用三个甚至两个分支，一个是Master, 一个是Develop, 还有一个是基于Develop打得各种分支。这个在小项目规模的时候还勉强可以支撑，因为很多人做项目就只有一个Release, 但是人员一多，而且项目周期一长就会出现各种问题

Git Flow


Git Flow常用的分支
Production 分支
也就是我们经常使用的Master分支，这个分支最近发布到生产环境的代码，最近发布的Release， 这个分支只能从其他分支合并，不能在这个分支直接修改

Develop 分支
这个分支是我们是我们的主开发分支，包含所有要发布到下一个Release的代码，这个主要合并与其他分支，比如Feature分支

Feature 分支
这个分支主要是用来开发一个新的功能，一旦开发完成，我们合并回Develop分支进入下一个Release

Release分支
当你需要一个发布一个新Release的时候，我们基于Develop分支创建一个Release分支，完成Release后，我们合并到Master和Develop分支

Hotfix分支
当我们在Production发现新的Bug时候，我们需要创建一个Hotfix, 完成Hotfix后，我们合并回Master和Develop分支，所以Hotfix的改动会进入下一个Release

 

Git Flow如何工作
初始分支
所有在Master分支上的Commit应该Tag

 



Feature 分支
分支名 feature/*

Feature分支做完后，必须合并回Develop分支, 合并完分支后一般会删点这个Feature分支，但是我们也可以保留



Release分支
分支名 release/*

Release分支基于Develop分支创建，打完Release分之后，我们可以在这个Release分支上测试，修改Bug等。同时，其它开发人员可以基于开发新的Feature (记住：一旦打了Release分支之后不要从Develop分支上合并新的改动到Release分支)

发布Release分支时，合并Release到Master和Develop， 同时在Master分支上打个Tag记住Release版本号，然后可以删除Release分支了。



维护分支 Hotfix
分支名 hotfix/*

hotfix分支基于Master分支创建，开发完后需要合并回Master和Develop分支，同时在Master上打一个tag



 

我们的实践方案（建议）
1、我们现在主要分3个环境：生产(master)，仿真(beta)，开发(dev)

2、生产(master)严禁直接提交代码，所有的代码合并需要研发负责人通过gitlab的merge request从具体的feature分支或者hotfix分支合并进去

3、每次发布生产(master)，需要为master打一个tag，方便线上回滚

4、每次有新的特性开发，需要从master分支中迁出一个feature分支。每次有新

5、开发完成完成需要从feature分支或者hotfix分支合并到dev分支或者beta分支，beta分支最好也走merge request，由具体研发人帮忙review代码

6. 功能分支(feature分支）命名应该体现当前功能，不要用自己姓名/当前日期等作为分支名