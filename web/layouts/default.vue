<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          :to="item.link"
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">订阅</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          @click="isShowLoginForm = true"
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-lock</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">登陆</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">管理订阅</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="indigo darken-2"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Youtube</span>
      </v-toolbar-title>
      <v-spacer />
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="搜索..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        />
      </v-row>
    </v-app-bar>

    <v-content>
        <nuxt :nuxt-child-key="$router.path"/>
    </v-content>
    <v-dialog
      
      v-model="isShowLoginForm"
      max-width="500px"
     
    >
         <v-form class="pa-5 text-center" @submit.prevent="login">
      <v-text-field
      v-model="loginModel.username"
        label="用户名"
      ></v-text-field>
      <v-text-field
      v-model="loginModel.password"
        label="密码"
        type="password"
      ></v-text-field>
      <v-btn 
      color="orange" type="submit">
      登录
      </v-btn>
      <v-btn color="blue lighten-1" @click="isShowLoginForm=false">取消</v-btn>
     </v-form>
    </v-dialog>
  
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      isShowLoginForm:false,
      loginModel:{},
      drawer: null,
      items: [
        { icon: 'home', text: '首页',link:'/' },
        { icon: 'subscriptions', text: '课程列表',link:'/courses' },
        { icon: 'history', text: '历史',link:'/history' },
        { icon: 'featured_play_list', text: '关注列表',link:'/featuredlist' },
        { icon: 'watch_later', text: '稍后观看',link:'/watchlater' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
    methods: {
     async login(){
        
        this.$auth.loginWith('local',{
          // data:{
          //   username:this.loginModel.username,
          //   password:this.loginModel.password
          // }
          // {{$store.state.auth.user.username||登陆}}
          data:this.loginModel
        
        })
        console.log('login success!')
        this.isShowLoginForm=false
      }
    },
    created () {
      this.$vuetify.theme.dark = false,
      this.$vuetify.theme.light = true
    },
  }
</script>
<style >
.v-dialog--active{
  background-color: rgba(255, 255, 255, 0.808) !important
}
</style>
