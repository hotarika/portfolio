<template>
   <section id="content" class="c-section detail__contentsListsSec">
      <div class="container">
         <h1 class="c-h1">内容説明</h1>
         <template v-for="d of descriptions">
            <div class="detail__contentsWrap" :key="d.title">
               <div class="detail__contentWrap">
                  <div class="detail__contentImage">
                     <img :src="require('../../images/top-image.jpg').default" alt="" />
                  </div>
                  <div class="detail__descriptionWrap">
                     <h2 class="detail__descriptionHead">{{ d.title }}</h2>
                     <pre class="detail__descriptionText">{{ d.description }}</pre>
                  </div>
               </div>
            </div>
         </template>
      </div>
   </section>
</template>

<script>
export default {
   props: { descriptions: Array }
};
</script>
