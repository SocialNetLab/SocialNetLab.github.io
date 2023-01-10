---
layout: post
title: Python | 日期和时间计算time()、datetime()
categories: Python
description: 给定一个目录root，读取根目录下的文件路径，返回列表
keywords: Python
---


## 需求1
将推特时间字符串转化为 “年/月/日 时:分:秒” 的形式

```
from datetime import datetime
dd = datetime.strftime(datetime.strptime(b,"%a %b %d %H:%M:%S +0000 %Y"), "%Y/%m/%d/ %H:%M:%S")
```

## 需求2
将时间戳串转化为 “年/月/日 时:分:秒” 的形式

```
import time
timeStamp = 1381419600
timeArray = time.localtime(timeStamp)
otherStyleTime = time.strftime("%Y--%m--%d %H:%M:%S", timeArray)
```

## 需求3
统计代码执行时间

```
from datetime import datetime
T0 = datetime.now()
T1 = datetime.now()
print(T1-T0)     
```


## 需求4
获得昨天、今天、明天

```
import datetime
today = datetime.datetime.today().date()
yestoday = today + datetime.timedelta(days=-1)
tomorrow = today + datetime.timedelta(days=1)
print(today) # 2019-01-30
print(yestoday)# 2019-01-29
print(tomorrow)# 2019-01-31
```


## 需求5
获取时间元组

```
>>>import time
>>> time.time()
1446643591.427887
>>> time.sleep(2.5)
>>> time.clock() #用于返回第一次调用该方法到现在的秒数
4.5289567910348396e-07
>>> time.gmtime()					#可选参数[sec]表示自1970年1月1日以来的秒数,默认time.time此函数返回一个time.struct_time类型对象，这个对象包括年份，日月，星期，天数，时分秒等描述时间的信息。,
time.struct_time(tm_year=2015, tm_mon=11, tm_mday=4, tm_hour=13, tm_min=31, tm_sec=4, tm_wday=2, tm_yday=308, tm_isdst=0)
>>> time.gmtime(time.time()-24*60*60)			#返回昨天此时对应的time_struct对象
time.struct_time(tm_year=2015, tm_mon=11, tm_mday=3, tm_hour=13, tm_min=31, tm_sec=46, tm_wday=1, tm_yday=307, tm_isdst=0)
>>> time.localtime()					#返回本地时间对应的一个time_struct对象
time.struct_time(tm_year=2015, tm_mon=11, tm_mday=4, tm_hour=21, tm_min=32, tm_sec=28, tm_wday=2, tm_yday=308, tm_isdst=0)
```

需要注意的是：格式化时间转化为时间戳，再转化为格式化时间时，gmtime和localtime()结果可能会相差一天
原因：gmtime转出来的是0时区的标准时间，localtime是将时区考虑在内了

