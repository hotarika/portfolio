<template>
   <section id="portfolio" class="c-section home__portfolioSec">
      <div class="container">
         <h2 class="c-h2 -other">その他 制作物</h2>
         <div class="home__portfolioItems">
            <!-- アイテム -->
            <template v-for="datum of data">
               <portfolio-component :datum="datum" :key="datum.title"></portfolio-component>
            </template>
         </div>
      </div>
   </section>
</template>

<script>
import productsData from '../data/productsData.json';

export default {
   data() {
      return {
         data: []
      };
   },
   mounted() {
      productsData.map((item) => {
         if (item.section === 'other') {
            this.data.unshift(item);
         }
      });
   }
};
</script>
