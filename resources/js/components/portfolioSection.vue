<template>
   <section id="portfolio" class="c-section home__portfolioSec">
      <div class="container">
         <h2 class="c-h2">ポートフォリオ</h2>
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
               image: 'portfoliosite.png',
               createDate: '2021/01/04',
               design: 'レスポンシブ対応',
               learning: ['HTML', 'SCSS', 'Bootstrap (一部機能)', 'Vue.js (コンポーネント化)', 'webpack'],
               detail: 'portfolio.html',
               look: '/',
               github: 'https://github.com/hotarika/portfolio'
            }
         ]
      };
   }
};
</script>
