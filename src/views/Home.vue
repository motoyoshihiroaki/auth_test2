<template>
  <div id="app" class="container my-5">

    <div class="mt-5 d-flex justify-content-center">
        <div class="w-25 d-flex justify-content-around">
            <button @click="login" class="btn text_vue_color">ログイン</button>
            <button @click="register" class="btn text_vue_color_sub">新規登録</button>
        </div>
    </div>

    <div v-if="statusBlue" class="statusBlue">{{ statusMessage }}</div>
    <div v-if="statusRed" class="statusRed">{{ statusMessage }}</div>

  </div>
</template>

<script>
import router from '../router'

export default {
    data() {
        return {
            statusBlue: false,
            statusRed: false,
            statusMessage: '',
            prevRoute: null,
        }
    },
    // mounted: {
    //     beforeRouteEnter(to, from, next) {
    //         next(vm => {
    //             vm.prevRoute = from;
    //         });
    //     },
    //     ifstatusBluefunc() {
    //         if (this.prevRoute.name == 'register') {
    //             this.statusBlue = true
    //             this.statusMessage = this.$store.state.sinup
    //         } else if (this.prevRoute.name == 'loginchoice') {
    //             this.statusBlue = true
    //             this.statusMessage = this.$store.state.login
    //         }
    //     },
        // ifstatusRedfunc() {
        //     if (prevRoute.name == 'register') {
        //         this.statusBlue = true
        //         this.statusMessage = this.$store.state.sinup
        //     } else if (prevRoute.name == 'loginchoice') {
        //         this.statusBlue = true
        //         this.statusMessage = this.$store.state.login
        //     }
        // },
    // },

     methods: {
        login() {
            router.push('/loginchoice');
        },
        register() {
            router.push('/register');            
        },

    }
}
</script>

<style>
    /* 共通ボタンの色 */
    .text_vue_color_sub {
        background-color: #35495E;
        color: white;
    }
    .text_vue_color_sub:hover {
        background-color: #18212B;
        color: white;
    }
        .text_vue_color {
        background-color: #41B883;
        color: white;
    }
    .text_vue_color:hover {
        background-color: #2D805A;
        color: white;
    }

    /* お知らせボックスの色 */
    .statusBlue {
        background-color: #98fb98;
        border: 2px solid #32cd32;
        padding: 0.7rem;
        margin: 0.3rem;
    }
    .statusRed {
        background-color: #ffc0cb;
        border: 2px solid #ff6347;
        padding: 0.7rem;
        margin: 0.3rem;
    }


</style>