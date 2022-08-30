# portfolio
https://shun2580.github.io/portfolio

---------- 環境構築　メモ --------------

// Cygwin
セットアップ時にviをインストールすること（minimalではダメ）
https://www.sw.it.aoyama.ac.jp/2011/CP1/cygwin/

// Vagrant
https://sites.google.com/a/kccs.co.jp/meetup/home/jia-xiangmashinwo-shitta-kai-fa-jian-zhengnosusume
” rm -rf - ”しても大丈夫! 自分専用 検証用Linux環境の作り方
を参照してVirtual BoxとVagrantをインストール

// 以下Cygwinを立ち上げて実行
$ vagrant version
$ mkdir ~/<好きな名前>
$ cd ~/<好きな名前>
$ vagrant box add centos/7
$ vagrant init centos/7
$ vi Vagrantfile

---以下を貼り付け---
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  # vueアプリのポートフォワーディング
  config.vm.network "forwarded_port", guest: 8080, host: 8080
end
---ここまで上書きして保存---

$ vagrant up
$ vagrant ssh

// 以下3行はお好みで
$ echo 'PS1="\[\033[1;37;44m\][\u \W]\[\e[m\]\$ "' >> ~/.bashrc
$ echo 'alias ll="ls -la"' >> ~/.bashrc
$ source ~/.bashrc

// nodejsインストール
$ sudo yum update
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
$ export PATH="$PATH:$HOME"
$ source ~/.bashrc
$ nvm --version                    // 0.35.3
$ nvm ls-remote --lts
$ nvm install v12.18.1
$ nvm alias default v12.18.1
$ nvm ls
$ node -v                          // v12.18.1

// vue-cliインストール
$ npm install -g @vue/cli@4.4.4
$ npm list -g @vue/cli             // @vue/cli@4.4.4
$ npm install -g @vue/cli-init
$ npm list -g @vue/cli-init        // @vue/cli-init@4.4.4
$ vue -V                           // @vue/cli 4.4.4

// プロジェクトディレクトリで
$ mkdir ~/<好きな名前のディレクトリ>
$ cd ~/<↑で作ったディレクトリパス>
$ vue create <好きな名前>
$ npm run serve

// ブラウザで http://localhost:8080 でVue.jsのロゴが表示されたらOK

// VSCode をインストール
https://azure.microsoft.com/ja-jp/products/visual-studio-code/

// VSCode の拡張機能 Remote Development をインストール、Vagrant 環境に接続
https://www.blog.uta8a.net/posts/2019-12-20-vscode-remote-ssh-dev/

// git
https://qiita.com/mochimochi-inu/items/914debabca56acc20a6d
$ git init
$ git add .
$ git commit -m "First"
$ git remote add origin *****
