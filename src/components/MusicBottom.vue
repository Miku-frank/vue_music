<template>
    <div class="audio">
        <div class="audio_img">
            <img src="@/assets/user.jpg" alt="">
        </div>
        <span>
            xxxxxx
        </span>
        <div class="music_len">
        </div>
    </div>
</template>


<script>
</script>


<style scoped>
.audio {
    width: 100%;
    height: 70px;
    margin-top: 110px;
    position: relative;
    display: flex;
    align-items: center;
}

.audio_img {
    width: 55px;
    height: 55px;
    display: flex;
    margin: 10px;
    cursor: pointer;
}

.audio_img > img {
    border-radius: 5px;
}

.music_len {
    width: 400px;
    height: 6px;
    background-color: red;
}
</style>