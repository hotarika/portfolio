<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>ポートフォリオサイトの制作</template>
      </detail-title-section>

      <!-- 主な機能の説明 -->
      <detail-content-section :h2="'主な機能・実装について'" :id="'function'">
         <template v-slot:content>
            <!-- プロトタイプ -->
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
                  プロトタイプで概ね構成を決めてから、あとはコーディングを進めながらデザインを考えていきました。ですので、上記のプロトタイプと実際のデザインには相違がありますが、プロトタイプの状況を確認していただくために、そのまま掲載しています。
               </p>
            </div>

            <!-- デザイン -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">デザイン</h3>
               <p>
                  このポートフォリオサイトのデザインのコンセプトは「手作り感」です。なぜ、手作り感を出したかったのかというと、ポートフォリオを採用担当者がチェックする時で、同じようなポートフォリオが多くほとんど見られていないというような実情があるようです。ですので、このデザインで解決したいことは、「少しでも興味を持ってもらうこと」です。そのためには、一般のポートフォリオと違った視点で、手作り感を出すことで少しでも興味を持ってもらうことがこのデザインの目的です。
               </p>
            </div>
         </template>
      </detail-content-section>

      <!-- 作成してみて -->
      <detail-content-section :h2="'作成してみて'" :id="'impression'">
         <template v-slot:content>
            <!-- コンポーネント化 -->
            <div class="c-h3__wrap">
               <h3 class="c-h3">このポートフォリを作成する上で学習したこと</h3>
               <h4 class="c-h4">スマホファースト</h4>
               <p>
                  今回このポートフォリオを作成する上で、初めてスマホファーストでレスポンシブデザインを実装しました。大きい画面から小さな画面を実装するよりも、小さな画面から実装することで、今まで苦労していたデザインの調整の負担が少なく、新たな学びを得ることができました。
               </p>
               <h4 class="c-h4">Git管理ルール</h4>
               <p>
                  今までGitの利用はは、慣れることを主軸に置いていたため、コミットメッセージや、Gitルールは学ばずに利用していました。基本的なGitの機能について慣れてきたこの段階で、今後チーム開発をする上で必要になってくるGit管理ルール（git-flow,
                  GitHub
                  Flow）の基本的な流れについて学びました。また、他者が確認しやすいコミットメッセージについても学びました。
               </p>
            </div>

            <div class="c-h3__wrap">
               <h3 class="c-h3">工夫した点</h3>
               <h4 class="c-h4">保守性を高めるためのコンポーネント化</h4>
               <p>
                  Vueを使用し、HTMLの重複をできるだけなくすようコンポーネント化を行いました。ですので、もし新たにセクションを追加したいといった場合には、簡単に追加することができるような仕様にしました。
               </p>
            </div>
         </template>
      </detail-content-section>
   </main>
</template>
