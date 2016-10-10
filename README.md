# frontplate

angular2 starter kit with frontplate-cli

This template is still beta.

## Dependence

* [NodeJS](https://nodejs.org/) 5.0以上
* [frontplate-cli](https://www.npmjs.com/package/frontplate-cli)

## Get Started

### 準備

## Get Started

frontplate-cliをインストールします。

```
npm i frontplate-cli -g
```

```
npm i && npm run typings
npm start
```

### 全体をビルド

すべてのファイルをビルドします。開発を始める前に必ず一度はビルドしましょう。

```
npm run build
```

### ファイル監視の実行 & サーバー起動

以下のコマンドを実行するとブラウザで開発中のページが開きます。この状態でCSSやJSを修正するとユニットテストやLintも同時に実行され、ブラウザが自動的に更新されます。

```
# srcディレクトリを監視
npm run serve
```
### リリースファイル作成

ひと通りの開発が完了した時点で、リリース用のファイルを作成します。
productionタスクではJSとCSSのソースマップが出力されなくなり、高度に圧縮されます。
```
npm run production
```

## Dependencies documentation

このテンプレートは[frontplate-cli](https://github.com/frontainer/frontplate-cli)がベースになっています。

詳細なドキュメントはCLIのドキュメントを参照してください。

[frontplate-cli](https://github.com/frontainer/frontplate-cli)
