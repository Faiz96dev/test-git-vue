<template>
    <el-main>

        <el-row type="flex" justify="center">
            <div v-loading="loading" class="info_item">
                <img class="avatar" v-bind:src="$store.getters.getUserInfo.avatar_url" alt="">
                <div class="info">
                    <p>Login: {{$store.getters.getUserInfo.login}}</p>
                    <p>Followers: {{$store.getters.getUserInfo.followers}}</p>
                    <p>Email: {{$store.getters.getUserInfo.email || 'not specified'}}</p>
                    <p>Public repos: {{$store.getters.getUserInfo.public_repos || 'not specified'}}</p>
                </div>
                <div class="info">
                    <p>Location: {{$store.getters.getUserInfo.location}}</p>
                    <p>Followers: {{$store.getters.getUserInfo.followers}}</p>
                    <p>Following: {{$store.getters.getUserInfo.following}}</p>
                    <p v-if="$store.getters.getUserInfo.bio">Bio: {{$store.getters.getUserInfo.bio}}</p>
                    <el-link target="_blank" :href="$store.getters.getUserInfo.html_url" type="success">Github link
                    </el-link>
                </div>
            </div>
        </el-row>
        <el-button style="margin-top: 20px;" @click="$router.push('/list')" type="primary">Back to list</el-button>


    </el-main>
</template>

<script>
    export default {
        data() {
            return {
                loading: true
            }
        },
        async mounted() {
            await this.$store.dispatch('getUserInfo', this.$route.params.login)
            this.loading = false
        }
    };
</script>

<style scoped>
    p {
        margin: 10px;
    }

    .info {
        margin: 15px;
        padding: 10px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .avatar {
        height: 200px;
        width: 200px;
        border-radius: 30px;
        margin: 20px;
    }

    .info_item {
        display: flex;
        /*width: 80%;*/
        background-color: white;
        border-radius: 5px;
    }
</style>
