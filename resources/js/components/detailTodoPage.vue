<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>TODOアプリの制作</template>
         <template v-slot:createDate><div class="c-h1__createDate">制作日：2020年 10月</div></template>
      </detail-title-section>

      <!-- 主な機能の説明 -->
      <detail-content-section :h2="'主な機能・実装について'" :id="'function'">
         <template v-slot:content>
            <!-- デモページ -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">デモページ</h3>
               <div class="c-demo">
                  <a href="">デモページはこちら</a>
                  <div>メールアドレス：test1@example.com</div>
                  <div>パスワード：rootroot</div>
               </div>
            </div>

            <!-- プロトタイプ -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">ページ全体のデザイン</h3>
               <img class="c-image" style="width: 55%" :src="require('../../images/details/todo.png').default" alt="" />
            </div>
            <div class="c-h3__wrap">
               <h3 class="c-h3">主な機能</h3>
               下記は全て非同期処理（axios）によってデータを処理しています。
               <ul>
                  <li>TODOの追加機能</li>
                  <li>TODOの削除機能</li>
                  <li>TODOの編集機能</li>
                  <li>TODOの検索機能</li>
                  <li>TODOの完了機能</li>
               </ul>
            </div>
         </template>
      </detail-content-section>
   </main>
</template>
