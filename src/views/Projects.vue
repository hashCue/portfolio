<template>
  <main class="projects">
    <article v-for="(item, index) in portfolio" :key="index">
      <h1>
        {{item.title}}
      </h1>
      <carousel
        :per-page="1"
        :paginationActiveColor="orangered"
        v-if="item.gallery">
        <slide v-for="(image, index) in item.gallery" :key="index">
          <expandable-image :src="image.src" :alt="image.alt"/>
        </slide>
      </carousel>
      <p v-for="(para, index) in item.desc" :key="index">
        {{para}}
      </p>
    </article>
  </main>
</template>

<script>
// @ is an alias to /src
import Portfolio from "@/assets/portfolio.js"

export default {
  name: 'projects',
  components: {
    
  },
  data() {
    return {
      portfolio: Portfolio.portfolio
    }
  }
}
</script>

<style scoped>
  
  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

  }

  p {
    text-align: justify;
  }

  .image-label {
    text-align: center;
    margin-bottom: -3px;
  }

  img {
    width: 375px;
    height: 375px;
  }

  article {
    width: 375px;
  }

</style>