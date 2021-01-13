<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>フリマアプリ (PHPによるフルクラッチ)</template>
         <template v-slot:createDate><div class="c-h1__createDate">制作日：2020年 5月</div></template>
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

            <!-- 画面構成 -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">画面構成</h3>
               <img class="c-image" :src="require('../../images/details/fleamarket-transition.png').default" alt="" />
            </div>
            <div class="c-h3__wrap">
               <h3 class="c-h3">主なページ</h3>
               <!-- 出品商品一覧 -->
               <div class="c-h4__wrap">
                  <h4 class="c-h4">出品商品一覧</h4>
                  <p>
                     出品商品は、カテゴリ・表示順（金額昇順・降順）により絞り込みを行うことができます（クエリパラメーターの条件からSQLでデータベースにアクセスし、情報を取得）。また、PHPのみでページネーションを実装しました。
                  </p>
                  <img class="c-image" :src="require('../../images/details/fleamarket-index.png').default" alt="" />
               </div>

               <!-- 出品商品一覧 -->
               <div class="c-h4__wrap">
                  <h4 class="c-h4">出品詳細</h4>
                  <img class="c-image" :src="require('../../images/details/fleamarket-detail.png').default" alt="" />
               </div>

               <!-- マイページ -->
               <div class="c-h4__wrap">
                  <h4 class="c-h4">マイページ</h4>
                  <p>
                     マイページでは、「商品登録一覧」「連絡掲示板一覧」「お気に入り一覧」を表示しています。連絡掲示板に関しては、最新のメッセージを１件表示するようなSQLを記述しています。
                  </p>
                  <img class="c-image" :src="require('../../images/details/fleamarket-mypage.png').default" alt="" />
               </div>

               <!-- 商品出品・編集 -->
               <div class="c-h4__wrap">
                  <h4 class="c-h4">商品出品・編集</h4>
                  <img
                     class="c-image"
                     :src="require('../../images/details/fleamarket-registerProduct.png').default"
                     alt=""
                  />
               </div>

               <!-- 販売履歴 -->
               <div class="c-h4__wrap">
                  <h4 class="c-h4">販売履歴</h4>
                  <img class="c-image" :src="require('../../images/details/fleamarket-history.png').default" alt="" />
               </div>

               <!-- プロフィール編集 -->
               <div class="c-h4__wrap">
                  <h4 class="c-h4">プロフィール編集</h4>
                  <img
                     class="c-image"
                     :src="require('../../images/details/fleamarket-editProfile.png').default"
                     alt=""
                  />
               </div>

               <!-- チャット -->
               <div class="c-h4__wrap">
                  <h4 class="c-h4">プロフィール編集</h4>
                  <img class="c-image" :src="require('../../images/details/fleamarket-chat.png').default" alt="" />
               </div>
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
                     この制作物が私が初めて制作(2020/05)したものであり、学習に多くの時間を費やしましたが、プログラミングについてこの段階で多くのことを学ぶことができました。また、この段階でしっかり学習したことにより、その後の学習する上でのベースができ、プログラミングに対しての理解がより深まりました。
                  </p>
               </div>
               <div class="c-h4__wrap">
                  <h4 class="c-h4">デバッグの使用</h4>
                  <p>
                     ブレークポイントによるデバッグをここの段階で初めて使用しました。これを使用することにより、「なんとなくコードが動いている」という状態から、「なぜこのように動いているのか」ということを意識できるようになったため、その後のプログラミング学習でも大いに役立っています。
                  </p>
               </div>
               <div class="c-h4__wrap">
                  <h4 class="c-h4">デザイン（プロトタイプ）の学習</h4>
                  <p>
                     この制作物からプロトタイプ（Adobe
                     XD）を作成してから、コーディングを実施するようにしました。今まではコーディングしながらデザインを考えていました。そうすると、その日の気分によってベストなデザインがコロコロ変わり、かなり非効率な制作プロセスを歩んでいたことを改善したく、プロトタイプを導入することにしました。
                  </p>
                  <p>
                     プロトタイプでデザインするにあたり、デザイン4大原則である「近接」「整列」「強弱」「反復」に加え、色に統一感を持たせることを意識しました。
                  </p>
               </div>
            </div>
            <div class="c-h3__wrap">
               <h3 class="c-h3">苦労した点</h3>
               <div class="c-h4__wrap">
                  <h4 class="c-h4">ページネーション</h4>
                  <p>
                     ページネーションでは、ページ数によって表示する数字を変動させるのに苦労しました。またそれに加え、カテゴリ別・価格順のクエリパラメーターもURLに追加する場合に不具合が出たため、バグの修正に時間がかかりましたが、デバッグによりコードを１つ１つ確認ししていくことで解決しました。
                  </p>
               </div>
            </div>
         </template>
      </detail-content-section>
   </main>
</template>
