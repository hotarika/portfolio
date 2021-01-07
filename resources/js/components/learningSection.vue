<template>
   <section id="learning" class="c-section home__learningSec">
      <div class="container">
         <h1 class="c-h1">これまでの学習内容</h1>
         <div class="home__learningItems">
            <!-- アイテム -->
            <template v-for="l of learning">
               <learning-component :learning="l" :key="l.title"></learning-component>
            </template>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         learning: [
            {
               title: 'コーディング',
               learningContents: ['HTML', 'CSS', 'SCSS'],
               currentLevel: `a
つまりそう言うことです。ああああああああああああああああああああああああああああああああああああああああああ
`,
               consciousness: `ああああああああああああああ`
            },
            {
               title: 'フロントエンド',
               learningContents: ['JavaScript', 'Vue.js', 'jQuery'],
               currentLevel: `フロントエンド`,
               consciousness: `ああああああああああああああ`
            },
            {
               title: 'バックエンド',
               learningContents: ['PHP', 'Laravel', 'SQL'],
               currentLevel: `バックエンド`,
               consciousness: `ああああああああああああああ`
            },
            {
               title: 'その他',
               learningContents: ['Adobe XD', 'タッチタイピング'],
               currentLevel: `その他`,
               consciousness: `ああああああああああああああ`
            },
            {
               title: '現在勉強中',
               learningContents: ['Linux', 'Git', 'Photoshop'],
               currentLevel: `現在勉強中`,
               consciousness: `ああああああああああああああ`
            }
         ]
      };
   }
};
</script>
