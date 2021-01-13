<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>オブジェクト指向の学習</template>
         <template v-slot:createDate><div class="c-h1__createDate">制作日：2020年 5月</div></template>
      </detail-title-section>

      <!-- 主な機能の説明 -->
      <detail-content-section :h2="'主な機能・実装について'" :id="'function'">
         <template v-slot:content>
            <!-- プロトタイプ -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">ページ全体のデザイン</h3>
               <p>
                  抽象的なクラス（自分と相手の共通事項）を作成し、それを継承してさらに自分と相手それぞれのメソッドとプロパティを記述し実装しています。
               </p>
               <img
                  class="c-image"
                  style="width: 70%; margin-bottom: 20px"
                  :src="require('../../images/details/objective-1.png').default"
                  alt=""
               />
               <img
                  class="c-image"
                  style="width: 70%"
                  :src="require('../../images/details/objective-2.png').default"
                  alt=""
               />
            </div>
         </template>
      </detail-content-section>

      <!-- 作成してみて -->
      <detail-content-section :h2="'作成してみて'" :id="'impression'">
         <template v-slot:content>
            <!-- コンポーネント化 -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">このポートフォリを制作する上で学習したこと</h3>
               <div class="c-h4__wrap">
                  <p>
                     この制作物はオブジェクト指向を学ぶために制作しました。ここで学習した内容は、フレームワーク（Laravel）を使用する上で役立っています。<br />ただ、この制作物でオブジェクト指向をしっかり理解できたのかといえば、まだまだ勉強不足だと感じています。ですので、今後も継続的に学習していく必要があると感じています。
                  </p>
               </div>
            </div>
         </template>
      </detail-content-section>
   </main>
</template>
