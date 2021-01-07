<template>
   <section id="portfolio" class="c-section home__portfolioSec">
      <div class="container">
         <h1 class="c-h1">その他 制作物</h1>
         <div class="home__portfolioItems">
            <!-- アイテム -->
            <template v-for="p of portfolio">
               <portfolio-component :portfolio="p" :key="p.title"></portfolio-component>
            </template>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         portfolio: [
            {
               title: 'PHPの学習',
               image: '',
               createDate: '2021/01/04',
               design: 'レスポンシブ対応',
               learning: ['Bootstrap', 'PHP'],
               detail: '',
               look: '',
               github: ''
            },
            {
               title: 'あう家',
               image: '',
               createDate: '2021/01/04',
               design: 'レスポンシブ対応',
               learning: ['Bootstrap', 'PHP'],
               detail: '',
               look: '',
               github: ''
            }
         ]
      };
   }
};
</script>
