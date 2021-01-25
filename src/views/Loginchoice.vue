<template>
  <div id="app" class="container my-5 w-75">
    
    <div class="mt-5 d-flex justify-content-around">
        <div class="w-25">
            <button @click="googleLogin" class="btn btn-danger w-100 mt-4">Googleでログイン</button>
            <button @click="googleLogin" class="btn btn-primary w-100 mt-4">Twitterでログイン</button>
            <button @click="googleLogin" class="btn btn-dark w-100 mt-4">GitHubでログイン</button>
        </div>


        <form class="w-25" @submit.prevent="registerUser">
            <div class="form-group">
                <label for="email">メールアドレス</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>

            <div class="form-group">
                <label for="password">パスワード</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>

            <div class="d-flex justify-content-around">
                <button @click="mealLogin" type="button" class="btn text_vue_color">ログイン</button>
                <router-link v-if="regitbtn" to="/register"><button @click="mealLogin" type="button" class="btn btn-danger">新規登録</button></router-link>
            </div>
        </form>

    </div>

    <div class="mt-5 d-flex justify-content-center">
        <div class="w-25 d-flex justify-content-around">
                <button @click="back" type="button" class="btn text_vue_color_sub">戻る</button>
        </div>
    </div>


  </div>
</template>

<script>
import router from '../router';
import firebase from 'firebase/app';

export default {
    data() {
        return {
            registerUser: '',
            email: 'h199milano@gmail.com',
            password: '123456',
            auth: firebase.auth(),
            db: firebase.firestore(),
            regitbtn: false
        };
    },
     methods: {

        idpAuth(provider) {

            this.auth.signInWithPopup(provider).then((result) => {
                const docRef = this.db.collection("users");
            
                // Firestore の users コレクション内に UIDが存在する確認
                docRef.doc(result.user.uid).get().then((doc) => {
                    if (doc.exists) {
                        console.log("データベース内でUID情報が確認できました")
                        router.push('/users')
                    } else {

                        const newuserData = {
                            uid: result.user.uid,
                            name: result.additionalUserInfo.profile.given_name,
                            email: result.additionalUserInfo.profile.email
                        }
                        // vuex store に保存する
                        this.$store.state.userData = [newuserData]

                        console.log("データベース内にUID情報がありません");
                        router.push('/register')
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            })
        },
        
        mealLogin() {
            this.auth.signInWithEmailAndPassword(this.email, this.password).then(() => {

                console.log("認証に成功")
                router.push('/users')

            }).catch(() => {

                console.log("データベース内にUID情報がありません");
                this.regitbtn = true

            })
        },

        googleLogin() {
                const provider = new firebase.auth.GoogleAuthProvider()
                this.idpAuth(provider)
        },

        // Twitter 認証
        // twitterLogin() {
        //         const provider = new firebase.auth.TwitterAuthProvider()
        //         this.idpAuth(provider)
        // },

        // GitHub 認証
        // githubLogin() {
        //         const provider = new firebase.auth.GithubAuthProvider()
        //         this.idpAuth(provider)
        // },


        back() {
            router.push('/');
        },
    }
}
</script>