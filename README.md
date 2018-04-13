# jquery-float-ad
jquery全屏随机飘窗广告插件

### 在页面中使用

在页面中引入 jQuery 库和 jquery-float-ad 插件，然后调用 `floatAd` 方法即可，漂浮速度可通过参数调整。
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>test</title>
        <!-- 引入jquery脚本库，必须 -->
        <script src="http://libs.baidu.com/jquery/1.7.2/jquery.min.js"></script>
        <style type="text/css">
            /* 给飘窗添加一些基础样式，如宽度，高度和背景颜色等等 */
            body{
                height: 3000px;
            }
            .float-ad {
                width: 200px;
                height: 200px;
                background-color: blue;
            }
        </style>
    </head>
    <body>
        <!-- 飘窗元素 -->
        <div class="float-ad"></div>
        <!-- 引入jquery脚本库，必须 -->
        <script src="http://libs.baidu.com/jquery/1.7.2/jquery.min.js"></script>
        <script src="jquery.float-ad.js"></script>
        <script type="text/javascript">
            $(function () {
                //调用漂浮插件
                $(".float-ad").floatAd({
                    speed: 10 //漂浮速度 单位毫秒
                });
            })
        </script>
    </body>
</html>
```
