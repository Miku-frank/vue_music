<template>
    <div class="content">
        <div class="left_box">
            <ul>
                <li><span>发现音乐</span></li>
                <li><span>博客</span></li>
                <li><span>视频</span></li>
                <li><span>关注</span></li>
                <li><span>直播</span></li>
                <li><span>私人FM</span></li>
            </ul>
            <div class="my_music">我的音乐</div>
            <ul>
                <li><span class="left2">本地与下载</span></li>
                <li><span class="left2">最近播放</span></li>
                <li><span class="left2">我的音乐云盘</span></li>
                <li><span class="left2">我的博客</span></li>
                <li><span class="left2">我的收藏</span></li>
            </ul>
            <div class="list_bottom">
                <span>创建的歌单</span><br/>
                <span>收藏的歌单</span>
            </div>
        </div>
        <div class="right_box"></div>
    </div>
</template>

<script>
</script>


<style scoped>
ul {
    width: 90%;
    margin: 10px auto;
    padding: 0;
}

li {
    list-style: none;
    display: flex;
    margin-bottom: 7px;
    width: 95%;
}

li:hover {
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(43, 41, 41);
}

.left2 {
    font-size: 15px;
}

span {
    font-size: 10px;
    color: #ffffff;
    margin: 5px;
}
.content {
    display: flex;
    height: 400px;
    width: 100%;
}
.left_box {
    width: 200px;
    height: 520px;
    background-color: #434343;
    border-right: 1px #686868 solid;
}

.right_box {
    width: 740px;
    height: 520px;
    background-color: #434343;
}

.my_music {
    color: #7c7c7c;
    font-size: 7px;
    position: relative;
    left: 15px;
    cursor: pointer;
}

.list_bottom > span {
    color: #7c7c7c;
    font-size: 10px;
    margin-left: 15px;
    cursor: pointer;
}
</style>