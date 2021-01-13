<template>
   <section id="portfolio" class="c-section home__portfolioSec">
      <div class="container">
         <h2 class="c-h2 -other">その他 制作物</h2>
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
               title: 'TODOアプリの制作 #6',
               image: 'todo.png',
               createDate: '2020/10/09',
               design: '未対応',
               learning: ['Vue.js(非同期処理含む)', 'Laravel'],
               detail: 'todo.html',
               look: 'sass',
               github: 'https://github.com/hotarika/sass'
            },
            {
               title: '簡易SNSアプリ #5',
               image: 'sns.png',
               createDate: '2020/09/15',
               design: '未対応',
               learning: ['Vue.js(非同期処理含む)', 'Laravel'],
               detail: 'sns.html',
               look: 'sns',
               github: 'https://github.com/hotarika/sns'
            },
            {
               title: 'Sass(SCSS)・レスポンシブの学習 #4',
               image: 'sass.png',
               createDate: '2020/06/29',
               design: 'あり',
               learning: ['HTML', 'SCSS'],
               detail: 'sass.html',
               look: 'sass',
               github: 'https://github.com/hotarika/sass'
            },
            {
               title: 'WordPressの学習（歯医者HP）#3',
               image: 'wordpress.png',
               createDate: '2020/06/05',
               design: '未対応',
               learning: ['HTML', 'CSS', 'WordPress'],
               detail: 'wordpress.html',
               look: 'dentist',
               github: 'https://github.com/hotarika/dentist'
            },
            {
               title: 'オブジェクト指向の学習 #2',
               image: 'objective.png',
               createDate: '2021/05/25',
               design: '未対応',
               learning: ['HTML', 'CSS', 'PHP'],
               detail: 'objective.html',
               look: '/objective',
               github: 'https://github.com/hotarika/objective'
            }
         ]
      };
   }
};
</script>
