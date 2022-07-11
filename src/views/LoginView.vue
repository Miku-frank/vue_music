<template>
    <div class="login_home">
            <div class="login_view">
                <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="phone" class="form-label">手机号</label>
                    <input v-model="phone" type="text" class="form-control" id="phone" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">密码</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div>
                <div class="error_message">{{ error_message }}</div>
                <button type="submit" class="btn btn-primary">登陆</button>
                </form>
            </div>
    </div>

</template>


<script>
import { ref } from 'vue';
import { useStore } from "vuex";
import router from "@/router/index";

export default {
    name: "LoginView",
    components: {
    },

    setup() {
        const store = useStore();
        let error_message = ref('');
        let phone = ref('');
        let password = ref('');

        const login = () => {
            store.dispatch("login", {
                phone: phone.value,
                password: password.value,
                success() {
                    error_message = "";
                    router.push({name: "home"});
                },
                error() {
                    error_message.value = "用户名或者密码错误"
                }
            })
        }

        return {
            error_message,
            phone,
            password,
            login
        }
    }
}
</script>


<style scoped>
button {
    width: 100%;
}

.error_message {
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
}

.login_view {
    padding: 10px;
    background-color: rgba(184, 179, 179, 0.7);
    width: 300px;
    height: 280px;
    margin-top: 40px;
    border-radius: 15px;
}


.login_home {
    background-image: url("@/assets/login_bg.jpg");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
}
</style>