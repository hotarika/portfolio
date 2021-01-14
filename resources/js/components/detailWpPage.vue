<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>{{ datum.title }}</template>
         <template v-slot:createDate>
            <div class="c-h1__createDate">制作日：{{ datum.createDate }}</div></template
         >
      </detail-title-section>

      <!-- 主な機能の説明 -->
      <detail-content-section :h2="'主な機能・実装について'" :id="'function'">
         <template v-slot:content>
            <!-- デモページ -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">デモページ</h3>
               <div class="c-demo">
                  <a :href="datum.look">デモページはこちら</a>
               </div>
            </div>

            <!-- プロトタイプ -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">ページ全体のデザイン</h3>

               <img
                  class="c-image"
                  style="border: none"
                  :src="require('../../images/details/dentist-all-pages.png').default"
                  alt=""
               />
            </div>
         </template>
      </detail-content-section>
   </main>
</template>

<script>
import productsData from '../data/productsData.json';

export default {
   data() {
      return {
         datum: []
      };
   },
   mounted() {
      productsData.forEach((el) => {
         if (el.id === 3) {
            console.log(el);
            this.datum = el;
         }
      });
   }
};
</script>
