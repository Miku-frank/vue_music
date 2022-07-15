<template>
    <div class="rec_main">
        <div>推荐歌曲</div>
        <div>
            <ul class="rec_son" v-if="rec_song.length !== 0">
                <li v-for="item in rec_song" :key="item.al.id">
                    <div class="rec_list">
                        <img :src="item.al.picUrl" alt="">
                    </div>
                    <span>{{ item.al.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';

export default {
    name: "RecommendSong",
    setup() {
        //重点： 要想渲染必须用ref不能直接赋值[]
        const rec_song = ref([]);      

        // 获取每日推荐歌曲(需要登录)
        $.ajax({
            url: "https://netease-cloud-music-api-five-iota-96.vercel.app/recommend/songs",
            type: "GET",
            xhrFields: {    // 跨域请求
                withCredentials: true 
            },
            success(resp) {
                for (let i = 0; i < 5; i ++) {
                    rec_song.value[i] = resp.data.dailySongs[i];
                }
            }
        });

        return {
            rec_song
        }
    }
}

</script>

<style scoped>
.rec_main {
    width: 96%;
    height: 220px;
    margin: 10px;
    color: #ffffff;
    list-style: none;
}

.rec_son {
    display: flex;
    justify-content: space-around;
    list-style: none;
    text-align: center;
    padding: 0;
}

.rec_list {
    width: 120px;
    height: 140px;
    margin: 10px;
}

.rec_list > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    cursor: pointer;
}
</style>