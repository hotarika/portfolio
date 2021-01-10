<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>TODOアプリの制作</template>
      </detail-title-section>

      <!-- 主な機能の説明 -->
      <detail-content-section :h2="'主な機能・実装について'" :id="'function'">
         <template v-slot:content>
            <!-- プロトタイプ -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">ページ全体のデザイン</h3>
               <h4 class="c-h4">ユーザー一覧画面</h4>
               <img class="c-h3__image" :src="require('../../images/details/sns-users.png').default" alt="" />
               <h4 class="c-h4">ユーザー詳細画面</h4>
               <img class="c-h3__image" :src="require('../../images/details/sns-user.png').default" alt="" />
               <h4 class="c-h4">投稿一覧画面</h4>
               <img class="c-h3__image" :src="require('../../images/details/sns-posts.png').default" alt="" />
               <h4 class="c-h4">投稿詳細画面</h4>
               <p>いいねボタンは非同期処理（axios）でデータベースに追加・削除しています。</p>
               <img class="c-h3__image" :src="require('../../images/details/sns-post.png').default" alt="" />
            </div>
         </template>
      </detail-content-section>
   </main>
</template>
