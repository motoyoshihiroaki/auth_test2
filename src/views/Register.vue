<template>
  <div id="app" class="container my-5">
      <!-- vuexを調べる -->
      <div v-if="prevRoute">
        <p v-if="prevRoute.name == 'loginchoice'" class="text-danger">{{ unregisteredMessage }}</p>
      </div>

    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">お名前</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="おみくじ たろう">
        </div>
        
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
            <label class="form-check-label" for="inlineRadio1">男性</label>
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">女性</label>
        </div>

        <div class="mt-5 d-flex justify-content-center">
            <div class="w-25 d-flex justify-content-around">
                <button @click="back" type="button" class="btn text_vue_color_sub">戻る</button>
                <button @click="regist" type="button" class="btn text_vue_color">登録</button>
            </div>

        </div>

    </form>

  </div>
</template>

<script>
import router from '../router'
import firebase from 'firebase/app';

export default {
    data() {
        return {
            unregisteredMessage: '会員情報が確認できませんでした！登録をしてください。',
            prevRoute: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from;
        });
    },

     methods: {
        async regist() {
            try {
                // store のデータを取得
                const ud = this.$store.state.userData[0]

                await firebase.firestore().collection('users').doc(ud.uid).set(ud)
                router.push('/users')
            } catch(error) {
                console.log("失敗の原因", error)
            }
        },

        back() {
            router.push('/');
        }
    }
}
</script>
