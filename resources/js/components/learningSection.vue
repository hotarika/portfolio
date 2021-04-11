<template>
   <section id="learning" class="c-section home__learningSec">
      <div class="container">
         <h2 class="c-h2">これまでの学習内容</h2>
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
               currentLevel: `HTML・CSS・Sass（SCSS）を利用してゼロからWEB制作をすることができます。また、CSS設計（FLOCSS）を利用し、全体の影響範囲を考えながらコーディングすることができます。

今後は、SEOや表示速度を意識したコーディングや、デザイナーの意図を正確に反映させるために、WEBデザインの勉強も進めていきたいと思っています。`,
               consciousness: `学習当初は、Sassを使用せずに基本的なCSSのみでスタイルを構築できることを目標に、学習を進めました。
また、CSS学習中にスタイルを崩してしまった経験から、CSS設計（FLOCSS）を学び、全体の影響範囲を考えながらコーディングすることを心がけました。
さらに、Emmet・スニペット・Prettier等を利用し、効率を意識しながら学習を進めました。`
            },
            {
               title: 'フロントエンド',
               learningContents: ['JavaScript', 'Vue.js', 'jQuery'],
               currentLevel: `フロントエンド開発では、デバッグ（ブレークポイント）を利用しながら勉強・開発を行いました。
Vue.jsに関しては、後述するLaravelと非同期通信（axios）を用いて、開発することができます。

今後はJavaScriptの仕様を深く理解していくこと、表現の幅を増やしていくことを目標に、学習を進めていきたいと思います。`,
               consciousness: `デバッグを用いて、1行1行確認・理解しながら学習を進めました。なぜ動作したのか不明なコードに関しては、そのままにせずに最大限理解するように心がけました。

また、「var, let, constの違い」、「stop.propagationがどのような挙動をするのか」など、学習中に疑問があればその都度調べ、理解を深めるためにサンプルコードで動作を確かめながら、学習を進めていきました。`
            },
            {
               title: 'バックエンド',
               learningContents: ['PHP', 'Laravel', 'SQL'],
               currentLevel: `フロントエンドと同様にデバッグ（ブレークポイント）を利用して勉強・開発を行いました。
Laravelでは、基本的な機能（Vue.jsとの連携・SQLによるデータ取得・基本的なテストコードなど）の実装をすることができます。
SQLに関しては、JOIN（RIGHT JOIN, LEFT JOIN）、サブクエリを用いて柔軟にデータを表示させることを学習しました。`,
               consciousness: `バックエンドを理解するために、PHPフルスクラッチでコードを書く練習・オブジェクト指向の学習、全体的なベースとなるネットワーク・サーバー（Cookie, Sessionの違いなど）の学習などを行いました。

上記の基本を学んだことにより、フレームワーク（Laravel）での実装時にとても役に立っています。`
            },
            {
               title: 'その他',
               learningContents: ['Adobe XD', 'タッチタイピング'],
               currentLevel: `【Adobe XD】
開発前に、プロトタイプを作成するようにしております。そうすることにより、デザインに迷うことなく開発が行えるため、効率化を図ることができます。

【タッチタイピング】
高校時代に10分間1500文字以上入力した記録があります。また、意識的にタッチタイピングでショートカットキーを利用することにより、効率を上げる工夫をしています。`,
               consciousness: `【Adobe XD】
デザイン構成を考える際に、HTML,CSSで実装することを想定し、プロトタイプに落とし込んでいきました。

あくまで、プロトタイプがメインではなく、開発することがメインですので、プロトタイプが8割完成したらそのまま開発に移り、「作業をしながらデザインを考える」という方法で開発を進めていきました。`
            },
            {
               title: '現在勉強中',
               learningContents: ['Linux', 'Git'],
               currentLevel: `Linux・Gitは、基本的な操作を行うことができます。今後も引き続き円滑に利用していけるように学習を継続していきます。

【Git】
Gitでは基本的なコマンドに加え、チーム開発をすることを意識して、git-flow,GitHub Flowの基本的な流れについて学習をしました。今後も引き続き学習を継続していきます。
`,
               consciousness: `実際に使用していく中で、不明な点あればその都度調べながら利用していきました。

Linux・Gitに関しては、開発をする上で中枢となる重要な技術ですので、今後も積極的に学習していきたいと思います。`
            }
         ]
      };
   }
};
</script>
