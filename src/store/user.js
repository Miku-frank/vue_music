import $ from 'jquery';

const User = {
    state: {
        userId: "",
        photo: "",
        username: "",
        is_login: false
    },
    getters: {
    },
    mutations: {
        UpdataUser(state, user) {
            state.id = user.id,
            state.photo = user.photo,
            state.username = user.username,
            state.is_login = true,

            localStorage.setItem("userinfo", JSON.stringify(state))
        }
    },
    actions: {
        login(context, data) {
            $.ajax({
                url: "https://netease-cloud-music-api-five-iota-96.vercel.app/login/cellphone",
                type: "POST",
                data: {
                    phone: data.phone,
                    password: data.password,
                },
                success(resp) {
                    if (resp.code === 200) {
                        context.commit("UpdataUser", {
                            userId: resp.account.userId,
                            photo: resp.profile.avatarUrl,
                            username: resp.profile.nickname,
                            is_login: true
                        });
                        data.success();
                    }
                },
                error() {
                    data.error();
                }
            });
        }
    },
    modules: {
    }
}

export default User;