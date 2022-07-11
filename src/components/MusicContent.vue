<template>
    <div class="main">
        <MusicHeader />
        <div class="line"></div>
        <MusicMain />
    </div>
</template>


<script>
import MusicHeader from '@/components/MusicHeader';
import MusicMain from '@/components/MusicMain';

export default {
    name: "MusicContent",
    components: {
        MusicHeader,
        MusicMain
    }
}
</script>


<style scoped>
.main {
    width: 938px;
    height: 630px;
    background-color: rgba(199, 173, 173, .8);
    user-select: none;
}

.line {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(120deg, #fccb90 0%, red 50%, #d57eeb 100%);
}
</style>