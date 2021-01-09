<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>Sass(SCSS)・レスポンシブの学習</template>
      </detail-title-section>

      <!-- 主な機能の説明 -->
      <detail-content-section :h2="'主な機能・実装について'" :id="'function'">
         <template v-slot:content>
            <!-- プロトタイプ -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">ページ全体のデザイン</h3>
               <img
                  class="c-h3__image"
                  style="width: 70%; margin-bottom: 20px"
                  :src="require('../../images/details/objective-1.png').default"
                  alt=""
               />
               <img
                  class="c-h3__image"
                  style="width: 70%"
                  :src="require('../../images/details/objective-2.png').default"
                  alt=""
               />
            </div>
         </template>
      </detail-content-section>
   </main>
</template>
