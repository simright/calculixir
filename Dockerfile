FROM node:7.9.0

MAINTAINER Wells Jia <wells.jia@simright.com>


RUN apt-get update \
    && apt-get install -y gfortran \
                          curl \
                          apt-transport-https \
                          openssl \
    && mkdir -p /calculixir

WORKDIR /calculixir

ADD . /calculixir

RUN npm install --silent --save-dev -g typescript \
    && npm install \
    && tsc /calculixir \

CMD ["node", "/calculixir/app.js"]
# ENTRYPOINT ["./calculix_2.11/bin/ccx"]
