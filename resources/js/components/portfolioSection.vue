<template>
   <section id="portfolio" class="c-section home__portfolioSec">
      <div class="container">
         <h1 class="c-h1">ポートフォリオ</h1>
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
               title: 'ポートフォリオのまとめサイト',
               image: 'portfolio-portfoliosite-image.png',
               createDate: '2021/01/04',
               design: 'レスポンシブ対応',
               learning: ['HTML', 'SCSS', 'Bootstrap (一部機能)', 'Vue.js', 'webpack'],
               detail: '',
               look: '',
               github: 'https://github.com/hotarika/portfolio'
            },
            {
               title: 'あう家お',
               image: 'top-image.jpg',
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
