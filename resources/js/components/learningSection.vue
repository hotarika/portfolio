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
               currentLevel: `HTML・CSS・SASS（SCSS）を利用してゼロからWEB制作をすることができます。また、CSS設計（FLOCSS）を利用し、全体の影響範囲を考えながらコーディングすることができます。

今後は、SEOや表示速度を意識したコーディング、デザイナーのデザインの意図を正確に反映させるために、WEBデザインの勉強も進めていきたいと思っています。`,
               consciousness: `学習当初は、Sassを使用せずに基本的なCSSをしっかりと書くことを意識して、学習を進めました。
また、CSS学習中にスタイルを崩してしまった経験から、CSS設計（FLOCSS）を学び、全体の影響範囲を考えながらコーディングすることを心がけました。
さらに、Emmet・スニペット・Prettier等を利用し、効率を意識しながら学習を進めました。`
            },
            {
               title: 'フロントエンド',
               learningContents: ['JavaScript', 'Vue.js', 'jQuery'],
               currentLevel: `フロントエンド開発では、デバッグ（ブレークポイント）を利用しながら勉強・開発を行いました。
Vue.jsに関しては、後述するLaravelと非同期通信（axios）を用いて、開発することができます。

今後はしっかりとJavaScriptの仕様を理解していくことや、表現の幅を増やしていくために、勉強していきたいと思います。`,
               consciousness: `デバッグを用いて、1行1行確認・理解しながら学習を進めました。なぜ動いたかわからないコードに関しては、そのままにせずに最大限理解するように心がけました。

また、「var, let, constの違い」、「stop.propagationがどういう挙動をするのか」など、学習中に疑問があればその都度調べ、理解を深めるためにサンプルコードで動作を確かめながら、学習を進めていきました。`
            },
            {
               title: 'バックエンド',
               learningContents: ['PHP', 'Laravel', 'SQL'],
               currentLevel: `フロントエンドと同様にデバッグ（ブレークポイント）を利用して勉強・開発を行いました。
Laravelでは、基本的な機能（Vue.jsとの連携・SQLによるデータ取得・基本的なテストコードなど）の実装をすることができます。
SQLに関しては、JOIN（RIGHT JOIN, LEFT JOIN）、サブクエリを用いて柔軟にデータを表示させることを学習しました。`,
               consciousness: `バックエンドを理解するために、PHPフルスクラッチでコードを書く練習・オブジェクト指向の学習、全体的なベースとなるネットワーク・サーバー（Cookie, Sessionの違いなど）の学習などを最初に行いました。

上記の基本を学んだことにより、フレームワーク（Laravel）での実装時にとても役に立っています。`
            },
            {
               title: 'その他',
               learningContents: ['Adobe XD', 'タッチタイピング'],
               currentLevel: `【Adobe XD】
はじめにプロトタイプを考え、デザインの構成を考えてから制作するようにしています。そうすることにより、デザインに迷うことなく制作でき、効率的に作業を進めることができています。

【タッチタイピング】
キーボードを見ずにタイピングができ、ショートカットキーを意識して利用することにより、効率を上げる工夫をしています。`,
               consciousness: `【Adobe XD】
構成を考えるときに、HTML,CSSで実装する場合のことを考え、プロトタイプに落とし込んでいきました。
あくまで、プロトタイプがメインではなく、制作することがメインですので、プロトタイプが8割完成したらそのまま制作に移り、制作しながらデザインを考える方法で学習を進めていきました。`
            },
            {
               title: '現在勉強中',
               learningContents: ['Linux', 'Git'],
               currentLevel: `Linux・Gitは、基本的な操作を行うことができます。実際に使用するとなるとまだまだ不明な点や不安定な部分があるので、今後もスムーズに利用していけるようにさらに学習が必要です

【Git】
Gitは基本的なコマンドに加え、チーム開発をすることを意識して、git-flow,GitHub Flowの基本的な流れについて学習をしました。実務によってルールが異なっているとの情報がありましたので、今後も柔軟に継続して学んでいきたいと思っています。
`,
               consciousness: `実際に制作時に使用していく中で、わからない部分が出てきたら、その都度調べながら利用していました。

Linux・Gitに関しては、今後も使用され続ける重要な技術ですので、積極的に学習していきたいと思います。`
            }
         ]
      };
   }
};
</script>
