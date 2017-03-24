FROM debian:jessie

MAINTAINER Wells Jia <wells.jia@simright.com>

VOLUME /data

RUN mkdir -p /calculixir
WORKDIR /calculixir

ADD ./calculix_2.11.tar.gz /calculixir 

ENTRYPOINT ["./calculix_2.11/bin/ccx", "-i"]
