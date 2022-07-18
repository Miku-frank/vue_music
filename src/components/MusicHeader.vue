<template>
    <div class="top">
        <div class="logo">
            <img class="logo_img" src="@/assets/logo.png" alt="">
            <span>Saber_Music</span>
        </div>
        <div class="search">
            <Search class="icon"></Search>
            <input type="text" placeholder="搜索">
        </div>

        <div v-if="$store.state.user.is_login" class="userinfo">
            <img class="user_photo" :src="$store.state.user.photo" alt="">
            <div class="username">{{ $store.state.user.username }}</div>
            <div class="logout" @click="logout">退出</div>
        </div>
        <div v-else>
            <div class="login" @click="login" >登录</div>
        </div>
    </div>
</template>


<script>
import { Search } from "@element-plus/icons-vue";
import router from "@/router/index";
import { useStore } from "vuex";

export default {
    name: "MusicHeader",
    components: {
        Search
    },
    setup() {
        const store = useStore();

        const login = () => {
            router.push({name: "login"});
        };

        const logout = () => {
            store.commit("logout");
            window.location.reload();   // 刷新当前页面
        }

        return {
            login,
            logout
        }
    }

}
</script>


<style scoped>
.top {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 50px;
    width: 100%;
    background-color: #323235;
    position: relative;
}

.logo {
    display: flex;
    width: 190px;
    text-align: center;
}

span {
    line-height: 60px;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

img {
    cursor: pointer;
}

.logo_img {
    height: 35px;
    margin: 10px;
    margin-left: 20px;
}

.search {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #434346;
    border-radius: 30px;
    height: 30px;
    margin-left: 20px;
}

.icon {
    width: 20px;
    height: 20px;
    color: rgb(27, 22, 22);
    margin: 5px;
}

input {
    width: 130px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    outline: none;      /* 清除输入框聚焦边框 */
    color: #ffffff;
}

.userinfo {
    display: flex;
    align-items: center;
    position: absolute;
    right: 20px;
    color: #ffffff;
    font-size: 12px;
}

.user_photo {
    border-radius: 50%;
    width: 35px;
    height: 35px;
}

.username {
    margin-left: 10px;
    cursor: pointer;
    right: 10px;
}

.login {
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    right: 30px;
    margin-top: -10px;
}

.logout {
    margin-left: 15px;
    cursor: pointer;
}
</style>