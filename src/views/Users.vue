<template>
  <div class="container my-5">

    <Omikuzi/>

    <div class="mt-5 d-flex justify-content-center">
        <div class="w-25 d-flex justify-content-around">
            <button @click="logout" class="btn text_vue_color">ログアウト</button>
            <button @click="release" class="btn text_vue_color_sub">会員解除</button>
        </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
import Omikuzi from "../components/Omikuzi"
import firebase from 'firebase/app'


export default {

     methods: {
        async logout() {
            router.push('/');
            await firebase.auth().signOut();
        },
        async release() {
            try {
                router.push('/');

                const user = firebase.auth().currentUser;
                await firebase.firestore().collection('users').doc(user.uid).delete();
            
                await user.delete();
                // console.log('アカウントを削除しました);
            } catch(error) {
                console.log(error);
            }
        },
    },
    
    components: {
		Omikuzi
	}
}
</script>