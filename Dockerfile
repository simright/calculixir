FROM daocloud.io/debian:jessie

MAINTAINER Wells Jia <wells.jia@simright.com>

VOLUME data

RUN mkdir -p /calculixir \
    && apt-get update \
    && apt-get install -y gfortran gfortran-4.9 libgfortran-4.9-dev 
 
WORKDIR /calculixir

ADD ./calculix_2.11.tar.gz /calculixir 

ENTRYPOINT ["./calculix_2.11/bin/ccx", "-i"]
