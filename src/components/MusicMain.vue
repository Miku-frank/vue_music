<template>
    <iframe v-if="if_open && $store.state.user.is_login" class="out_card1" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 :src="pan_src"></iframe>
    <div v-if="if_open && $store.state.user.is_login" class="icon" @click="pan_close">x</div>
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
        <div class="right_box">
            <ul class="navbar">
                <li @click="setActive($event)" class="active"><span>个性推荐</span></li>
                <li @click="setActive($event)"><span>专属定制</span></li>
                <li @click="setActive($event)"><span>歌单</span></li>
                <li @click="setActive($event)"><span>排行榜</span></li>
                <li @click="setActive($event)"><span>歌手</span></li>
                <li @click="setActive($event)"><span>最新音乐</span></li>
            </ul>

            <el-carousel v-if="currentTag === '个性推荐'" :interval="4000" type="card" height="200px" style="margin: 5px; margin-bottom: -5px">
                <el-carousel-item v-for="item in rec_list" :key="item.id">
                <img @click="send_data(item.id)" class="Tag_img" :src="item.picUrl" alt="">
                </el-carousel-item>
            </el-carousel>

            <div  v-if="currentTag === '排行榜'" class="card" style="margin: 19.6px">
                <ul class="list-group list-group-flush top">
                    <li v-for="item in music_top" :key="item.index" class="list-group-item">
                        <NarBarCard :item="com(item)" :card_img="music_top_img" />
                    </li>
                </ul>
            </div>

            <div  v-if="currentTag === '歌手'" class="card" style="margin: 19.6px">
                <ul class="list-group list-group-flush top">
                    <li v-for="item in person_top" :key="item.index" class="list-group-item">
                        <NarBarCard :item="item.name"  :card_img="item.picUrl" />
                    </li>
                </ul>
            </div>

            <div  v-if="currentTag === '最新音乐'" class="card" style="margin: 19.6px">
                <ul class="list-group list-group-flush top">
                    <li v-for="item in new_top" @click="send_data2(item.id)" :key="item.index" class="list-group-item">
                        <NarBarCard :item="item.name"  :card_img="item.picUrl" />
                    </li>
                </ul>
            </div>

            <div v-if="currentTag === '专属定制' || currentTag === '歌单'" style="width: 96%; height: 229.455px"></div>

            <RecommendSong @send_data="send_data2" />

        </div>
    </div>

    <iframe class="out_card2" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 :src="pan_src2"></iframe>

</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';
import NarBarCard from './NarBarCard.vue';
import RecommendSong from './RecommendSong.vue';
import { useStore } from 'vuex';

export default {
    name: "MusicMain",
    components: {
    NarBarCard,
    RecommendSong,
},
    setup() {
        const store = useStore();

        const currentTag = ref('个性推荐');
        const rec_list = ref([{       // 注意坑点
            id: '',
            picUrl: '',
            type: ''
        }]);

        const com = (item) => item.first + "   " + item.second;

        let music_top = ref([]);
        let music_top_img = ref('');

        let person_top = ref([]);

        let new_top = ref([]);

        let pan_src = ref('');
        let pan_src2 = ref('');
        let iframe1_type = ref('');
        let iframe1_id = ref('');
        let iframe2_type = ref('');
        let iframe2_id = ref('');
        let if_open = ref('');

        const setActive = (e) => {
            const items = document.querySelectorAll(".navbar > li");
            // e.target 是当前点击的元素   e.currentTarget 是绑定事件的元素
            // console.log(e.target, e.currentTarget);
            items.forEach((items) => {
                items.classList.remove('active');
            })
            e.currentTarget.classList.add('active');
            currentTag.value = e.target.innerText;      // innerText获取标签里的值
        }

        const pan_close = () => {
            if_open.value = false;
        }

        const send_data = (id) => {
            if (!store.state.user.is_login) {
                window.alert("请先登录");
                return ;
            }

            if_open.value = true;
            pan_src.value = "//music.163.com/outchain/player?type=0&id=" + id + "&auto=1&height=430"
            console.log(pan_src.value);
        }

        const send_data2 = (id) => {
            if (!store.state.user.is_login) {
                window.alert("请先登录");
                return ;
            }
            if_open.value = false;
            pan_src2.value = "//music.163.com/outchain/player?type=2&id=" + id + "&auto=1&height=66";
        }

        // 获取推荐歌单(需要登录)
        $.ajax({
            url: "https://netease-cloud-music-api-five-iota-96.vercel.app/recommend/resource",
            type: "GET",
            xhrFields: {    // 跨域请求
                withCredentials: true 
            },
            success(resp) {
                for (let i = 0; i <= 5; i ++) {
                    rec_list.value[i] = resp.recommend[i];
                }
            }
        });

        // 获取音乐榜单
        $.ajax({
            url: "https://netease-cloud-music-api-five-iota-96.vercel.app/toplist/detail",
            type: "GET",
            success(resp) {
                music_top.value = resp.list[0].tracks;
                music_top_img.value = resp.list[0].coverImgUrl;
                // console.log(music_top.value[0].first);
            }
        });

        // 获取歌手榜单
        $.ajax({
            url: "https://netease-cloud-music-api-five-iota-96.vercel.app/toplist/artist",
            type: "GET",
            success(resp) {
                for (let i = 0; i < 3; i ++) {
                    person_top.value[i] = resp.list.artists[i];
                }
            }
        });

        // 获取推荐新音乐
        $.ajax({
            url: "https://netease-cloud-music-api-five-iota-96.vercel.app/personalized/newsong",
            type: "GET",
            success(resp) {
                for (let i = 0; i < 3; i ++) {
                    new_top.value[i] = resp.result[i];
                }
            }
        })

        return {
            setActive,
            currentTag,
            rec_list,
            music_top,
            music_top_img,
            person_top,
            com,
            new_top,
            iframe1_id,
            iframe1_type,
            iframe2_id,
            iframe2_type,
            if_open,
            pan_close,
            send_data,
            pan_src,
            send_data2,
            pan_src2
        }
    }
}

</script>


<style scoped>
li {
    list-style: none;
}
.left_box > ul {
    width: 90%;
    margin: 10px auto;
    padding: 0;
}

.left_box > ul > li {
    display: flex;
    margin-bottom: 7px;
    width: 95%;
}

.left_box > ul > li:hover {
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
    position: relative;
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

.navbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
}

.navbar span {
    font-size: 16px;
    cursor: pointer;
    user-select: none;
}

.navbar > li {
    margin: 8px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.active {
    transform: scale(1.2);
}

.active::before {
    content: '';
    width: 60%;
    height: 1px;
    position: absolute;
    background-color: red;
    top: 30px;
}

.el-carousel__item h3 {
color: #475669;
font-size: 14px;
opacity: 0.75;
line-height: 200px;
margin: 0;
}

.Tag_img {
    width: 100%;
    height: 100%;
}

.top {
    width: 100%;
    border: 0;
}

.top > li {
    background: rgba(0, 0, 0, .1);
    color: white;
    margin-bottom: 5px;
    transition: .2s;
}

.top > li:hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px rgb(42, 35, 35);
}

.card {
    background-color: rgba(0, 0, 0, 0);
    border: none;      /* 去除卡片默认边框样式 */
    height: 200px;
    position: relative;
    bottom: 5px;
}

.top_img {
    padding: 0 5px;
}

.top span {
    line-height: 46px;
}

.out_card1 {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 300px;
    height: 450px;
    z-index: 1000;
}

.out_card2 {
    margin-top: 110px;
    width: 102%;
    margin-left: -10px;
}

.icon {
    color: black;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 15px;
    left: 265px;
    z-index: 9999;
    cursor: pointer;
}
</style>