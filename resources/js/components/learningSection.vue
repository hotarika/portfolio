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
               currentLevel: `HTML・CSS・SASS（SCSS）を利用してゼロからWEB制作をすることができます。また、CSS設計（FLOCSS）を利用し、全体の影響範囲を考えながらコーディングすることができます。

今後は、SEOや表示速度を意識したコーディング、デザイナーのデザインの意図を正確に反映させるために、WEBデザインの勉強も進めていきたいと思っています。`,
               consciousness: `学習当初は、Sassを使用せずに基本的なCSSをしっかりと書くことを意識して、学習を進めました。
また、CSSの詳細度がわからず、スタイルを崩してしまった経験から、CSS設計（FLOCSS）を学び、全体の影響範囲を考えながらコーディングすることを心がけました。
さらに、Emmet・スニペット・Prettier等を利用し、効率を意識しながら学習を進めました。`
            },
            {
               title: 'フロントエンド',
               learningContents: ['JavaScript', 'Vue.js', 'jQuery'],
               currentLevel: `フロントエンド開発では、デバッグ（ブレークポイント）を利用しながら勉強・開発を行いました。
Vue.jsに関しては、後述するLaravelと非同期通信（Ajax）を用いて、ユーザーにとって使いやすいアプリになるように意識して開発することができます。

今後はしっかりとJavaScriptの仕様を理解していくことや、表現の幅を増やしていくために、勉強していきたいと思います。`,
               consciousness: `デバッグを用いて、1行1行確認・理解しながら学習を進めました。なぜ動いたかわからないコードに関しては、そのままにせずに最大限理解するように心がけました。
また、「var, let, constの違い」、「stop.propagationがどういう挙動をするのか」など、学習中に疑問があればその都度調べ、理解を深めるためにサンプルコードを書きながら学習を進めました。`
            },
            {
               title: 'バックエンド',
               learningContents: ['PHP', 'Laravel', 'SQL'],
               currentLevel: `フロントエンドと同様にデバッグ（ブレークポイント）を利用して勉強・開発を行いました。
Laravelでは、基本的な機能（Vue.jsとの連携・SQLによるデータ取得・基本的なテストコードなど）の実装をすることができます。SQLに関しては、JOIN（RIGHT JOIN, LEFT JOIN）、サブクエリを用いて柔軟にデータを表示させることを学習しました。`,
               consciousness: `バックエンドを理解するために、素のPHPでコードを書く練習・オブジェクト指向の学習、全体的なベースとなるネットワーク・サーバー（Cookie, Sessionの違いなど）の学習などを最初に行いました。また、その学習がフレームワーク（Laravel）で機能を実装する上でとても役に立っています。`
            },
            {
               title: 'その他',
               learningContents: ['Adobe XD', 'タッチタイピング'],
               currentLevel_other: `【Adobe XD】
はじめにフレームワークを考え、その後全体の色やバランスを整えていくという手順を踏んで制作しています。このポートフォリオサイトもAdobe XDを利用しています。`,
               currentLevel: `【タッチタイピング】
キーボードを見ずにタイピングができ、ショートカットキーを意識的に利用することにより、効率を上げる工夫をしています。`,
               consciousness: `【Adobe XD】
構成を考えるときに、HTML,CSSで実装する場合のことを考え、プロトタイプに落とし込んでいきました。あくまで、プロトタイプがメインではなく、制作することがメインなので、プロトタイプが８割完成したらそのまま制作に移り、制作しながらデザインを考える方法で学習を進めていきました。`
            },
            {
               title: '現在勉強中',
               learningContents: ['Linux', 'Git', 'Photoshop'],
               currentLevel: `上記の全てについて、基本的な操作を行うことができますが、実際に使用するとなるとまだまだ不明な点や不安定な部分があるので、今後もスムーズに利用していけるようにさらに学習が必要です

【Git】
Gitは基本的なコマンドに加え、チーム開発をすることを意識して、git-flow,GitHub Flowの基本的な流れについて学習をしました。実務によってルールが異なっているとの情報がありましたので、今後も柔軟に継続的に学んでいきたいと思っています。
`,
               consciousness: `実際に学習を進めていく中で、必要な部分、不明な部分が出てきたら、その都度調べながら利用していきました。Web制作・開発の学習初期段階では、まずは概要を理解すること、調べながら進めていくことができるレベルを目指して学習をしました。`
            }
         ]
      };
   }
};
</script>
