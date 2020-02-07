<template>
    <div class="pa-3">
        <h3>课程列表</h3>
        <v-row>
            <v-col md='3' v-for="item in courses" :key="item._id">
                <v-card class="mx-auto" max-width='344' :to="'/courses/'+item._id">
                    <v-img :src="item.cover" height="200px">
                    </v-img>
                    <v-card-title>
                        {{item.title}}
                    </v-card-title>
                    <v-card-subtitle>
                        {{item.createdAt}}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn text>查看</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
async asyncData({ $axios }) {
     const resdata = await $axios.$get(process.env.API_URL+'/courses')
   
     return {
         courses:resdata.data
     }
 },
}
</script>

<style>
</style>
