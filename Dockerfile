FROM node:7.9.0

MAINTAINER Wells Jia <wells.jia@simright.com>

ADD . /app

WORKDIR /app

RUN apt-get update \
    && apt-get install -y gfortran \
                          curl \
                          apt-transport-https \
                          openssl \
    && apt-get clean \ 
    && apt-get autoclean \ 
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \ 


RUN npm install 

CMD ["Done!"]

