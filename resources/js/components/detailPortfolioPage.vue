<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>ポートフォリオサイトの制作</template>
      </detail-title-section>

      <!-- 内容説明 -->
      <detail-content-section :h2="'主な機能の説明'" :id="'function'">
         <template v-slot:content>
            <div class="c-h3__wrap">
               <h3 class="c-h3">プロトタイプ</h3>
               <figure class="c-h3__figure">
                  <img
                     class="c-h3__image"
                     :src="require('../../images/details/portfolio-prototype.png').default"
                     alt=""
                  />
                  <figcaption class="c-h3__figcaption">左:フレームワーク / 右:プロトタイプ</figcaption>
               </figure>
               <p>
                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
               </p>
               <p>いいいいいいいいいいいいいいいいいいいいいいいいいいいいいい</p>
            </div>
         </template>
      </detail-content-section>

      <!-- 作成してみて -->
      <detail-content-section :h2="'作成してみて'" :id="'impression'">
         <template v-slot:content>
            <div class="c-h3__wrap">
               <h3 class="c-h3">工夫した点</h3>
            </div>
            <div class="c-h3__wrap">
               <h3 class="c-h3">苦労した点</h3>
            </div>
         </template>
      </detail-content-section>
   </main>
</template>
