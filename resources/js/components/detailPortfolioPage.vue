<template>
   <main class="main detail">
      <detail-title-section>
         <template v-slot:title>ポートフォリオサイトの制作</template>
      </detail-title-section>

      <!-- 内容説明 -->
      <detail-content-section :descriptions="descriptions"></detail-content-section>

      <!-- 作成してみて -->
      <detail-impression-section>
         <template v-slot:impression>
            <h2>苦労した点</h2>
            <h2>工夫した点した点</h2>
         </template>
      </detail-impression-section>
   </main>
</template>

<script>
export default {
   data() {
      return {
         descriptions: [
            {
               title: 'ログイン機能の作成',
               image: '/',
               description: `ああ
あああ、アイウエオ
ああああああああ

ああああああああああああ

ああああああああああ`
            },
            {
               title: '登録機能の作成',
               image: '/',
               description: ``
            }
         ]
      };
   }
};
</script>
