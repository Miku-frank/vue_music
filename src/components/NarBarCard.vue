<template>
    <div class="container">
        <div class="row">
            <div class="col-1 top_img">
                <img :src="card_img" alt="" style="width: 100%">
            </div>
            <div class="col-11">
                <span>{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NarBarCard",
    props: {
        card_img: {
            type: Object,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        }
    }
}
</script>


<style scoped>
</style>