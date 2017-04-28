FROM ubuntu:16.04
RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install git
RUN apt-get -y install postgresql
RUN git clone https://github.com/Armour/vscode-typescript-react-redux-snippets
CMD echo "YES!"
