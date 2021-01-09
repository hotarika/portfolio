<template>
   <section id="portfolio" class="c-section home__portfolioSec">
      <div class="container">
         <h2 class="c-h2">その他 制作物</h2>
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
               title: 'Sass(SCSS)・レスポンシブの学習',
               image: 'sass.png',
               createDate: '2020/06/29',
               design: 'レスポンシブ対応',
               learning: ['HTML', 'SCSS'],
               detail: 'sass.html',
               look: 'sass',
               github: 'https://github.com/hotarika/sass'
            },
            {
               title: 'WordPressの学習（歯医者HP）',
               image: 'wordpress.png',
               createDate: '2020/06/05',
               design: 'PCのみ対応',
               learning: ['HTML', 'CSS', 'WordPress'],
               detail: 'wordpress.html',
               look: 'dentist',
               github: 'https://github.com/hotarika/dentist'
            }
         ]
      };
   }
};
</script>
