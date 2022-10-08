
---------- 環境構築　メモ --------------

// nodejsインストール
$ sudo yum update
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
$ export PATH="$PATH:$HOME"
$ source ~/.bashrc
$ nvm --version                    
$ nvm ls-remote --lts
$ nvm install v12.18.1
$ nvm alias default v12.18.1
$ nvm ls
$ node -v                          

// vue-cliインストール
$ npm install -g @vue/cli@4.4.4
$ npm list -g @vue/cli             
$ npm install -g @vue/cli-init
$ npm list -g @vue/cli-init        
$ vue -V                           

// プロジェクトディレクトリで
$ mkdir ~/<好きな名前のディレクトリ>
$ cd ~/<↑で作ったディレクトリパス>
$ vue create <好きな名前>

// 3000番ポートを恒久的に許可
$ sudo firewall-cmd --add-port=8080/tcp --zone=public --permanent
$ sudo firewall-cmd --reload

$ npm run serve
// ブラウザで http://localhost:8080 でVue.jsのロゴが表示されたらOK

// VSCode をインストール
https://azure.microsoft.com/ja-jp/products/visual-studio-code/

// VSCode の拡張機能 Remote Development をインストール、Vagrant 環境に接続
https://www.blog.uta8a.net/posts/2019-12-20-vscode-remote-ssh-dev/

// git
https://qiita.com/mochimochi-inu/items/914debabca56acc20a6d
$ sudo yum -y install wget
$ git init
$ git add .
$ git commit -m "First"
$ git remote add origin *****
