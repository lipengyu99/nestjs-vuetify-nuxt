<template>
<div>
    <div class="bg-room" >
        <v-row class="pa-3"> 
            <v-col clos="12" md="8">
               <v-card class="pa-3" outline tile>
                 <h3>课程详情-{{course.title}}</h3>
                <v-select v-model="currentIndex" :items="course.episodes.map((v,i)=>({
                        text:v.name,
                        value:i
                    }))">
                </v-select>
        <video :src="episode.file" controls width="100%" height="400px" style="z-index:2"></video>
            </v-card>
            </v-col>
            <v-col
                cols="6"
                md="4"
            >
                <v-card
                class="pa-2"
                outlined
                tile
                >
                .col-6 .col-md-4
                </v-card>
            </v-col>
        </v-row>
        
      
    </div>
</div>

  
</template>

<script>
export default {
   async asyncData({params,$axios}) {
        const course = await $axios.$get(process.env.API_URL+'/courses/'+params.id,{
            params: {
                query: { populate: 'episodes' }
         }
        })
        
        console.log(course)
        return {course}
    },
    data() {
        return {
            currentIndex:0
        }
    },
    computed: {
        episode(){
            return this.course.episodes[this.currentIndex]
        }
    },
}
</script>

<style>
.bg-room{
    background-image: url('http://static.hdslb.com/live-static/images/bg/6.jpg');
    position: relative;
    max-width: 1920px;
    max-height: 930px;
    height: 100%;
    left:0%;
   
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
   
}
/* .bg-room:after{
    position: absolute;
    content: "";
    width: 100%;
    left: 0%;
    top: 0%;
    height: 100%;
    background: linear-gradient(0deg,#f2f3f5,transparent 30%);
 
} */

</style>
