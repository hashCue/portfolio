<template>
  <main class="projects">
    <article v-for="(item, index) in portfolio" :key="index">
      <h1>
        {{item.title}}
      </h1>
      <expandable-image :src="item.image.src" v-if="item.image" :alt="item.image.alt"/>
      <div v-html="item.video.embed" v-if="item.video">
      </div>
      <carousel
        :per-page="1"
        navigationEnabled="true"
        paginationActiveColor="#FF4500"
        paginationPosition="bottom-overlay"
        v-if="item.gallery">
        <slide v-for="(image, index) in item.gallery" :key="index">
          <expandable-image :src="image.src" :alt="image.alt"/>
          <p class="label">{{image.alt}}</p>
        </slide>
      </carousel>
      <p v-for="(para, index) in item.desc" :key="index">
        {{para}}
      </p>
      <p v-if="item.link">
        <a :href="item.link">project link</a>
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

  .label {
    font-size: 0.8em;
    font-style: italic;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 35px;
  }

  img {
    width: 375px;
    height: 375px;
  }

  article {
    width: 375px;
  }

</style>