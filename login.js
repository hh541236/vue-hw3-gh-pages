import{ createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';

createApp({
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
        login(){
            axios.post(api, this.user)
                .then((res) =>{
                    // token 記錄到cookie中，expired為儲存的時間期限
                    const {token, expired} = res.data;
                                    // 名稱(自定義)         // 更改時間格式
                    document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
                    alert(res.data.message);
                    // 轉址
                    window.location = 'products.html';
                })
                .catch((err) =>{
                    alert(err.data.message);
                })
        }
    },
  }).mount('#app');