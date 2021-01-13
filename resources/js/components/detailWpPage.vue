<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>WordPressの学習（歯医者HP）</template>
      </detail-title-section>

      <!-- 主な機能の説明 -->
      <detail-content-section :h2="'主な機能・実装について'" :id="'function'">
         <template v-slot:content>
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
