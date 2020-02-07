<template>
     <div class="pa-3">
       <!-- <h3>{{course.title}}</h3> -->
       <h3>课程详情-{{course.title}}</h3>
       
       <v-select 
       v-model="currentIndex"
        
        :items="course.episodes.map((v,i)=>({
            text:v.name,
            value:i
        }))">

       </v-select>
       <video :src="episode.file" controls width="100%" height="400px"></video>

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

</style>
