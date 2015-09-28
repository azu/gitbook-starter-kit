# Hello World

Hello World!

`[import](path/to/file)` でJavaScriptファイルを読み込んで、CodeBlockとして展開することができます。

[import, hello-world.js](../src/hello-world.js)

この機能はGitBookのプラグインで実装されています。

- [azu/gitbook-plugin-include-codeblock](https://github.com/azu/gitbook-plugin-include-codeblock "azu/gitbook-plugin-include-codeblock")

外部JavaScriptファイルはESLintによりチェックされます。
ESLintのルールは[.eslintrc](../.eslintrc)で定義されています。

また、インラインコードをCodeBlockに書いたJavaScriptもESLintによりチェックされます。

```js
function helloWorld(name){
    return `Hello World ${name}!`;
}
```

インラインコードのESLintのルールは[.md.eslintrc](../.md.eslintrc)で定義されています。

ESLintについての詳細は公式サイトを参照して下さい

- [ESLint - Pluggable JavaScript linter](http://eslint.org/ "ESLint - Pluggable JavaScript linter")