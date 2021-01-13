<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>簡易SNSアプリ</template>
         <template v-slot:createDate><div class="c-h1__createDate">制作日：2020年 9月</div></template>
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
               <h4 class="c-h4">ユーザー一覧画面</h4>
               <img class="c-image" :src="require('../../images/details/sns-users.png').default" alt="" />
               <h4 class="c-h4">ユーザー詳細画面</h4>
               <img class="c-image" :src="require('../../images/details/sns-user.png').default" alt="" />
               <h4 class="c-h4">投稿一覧画面</h4>
               <img class="c-image" :src="require('../../images/details/sns-posts.png').default" alt="" />
               <h4 class="c-h4">投稿詳細画面</h4>
               <p>いいねボタンは非同期処理（axios）でデータベースに追加・削除しています。</p>
               <img class="c-image" :src="require('../../images/details/sns-post.png').default" alt="" />
            </div>
         </template>
      </detail-content-section>

      <!-- 作成してみて -->
      <detail-content-section :h2="'作成してみて'" :id="'impression'">
         <template v-slot:content>
            <!-- コンポーネント化 -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">このポートフォリを制作する上で学習したこと</h3>
               <ul>
                  <li>非同期通信でいいね機能を実装</li>
                  <li>フォームのテストコードの記述</li>
               </ul>
            </div>
         </template>
      </detail-content-section>
   </main>
</template>
