FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY proxy.conf /etc/nginx/conf.d/default.conf

EXPOSE 9000
EXPOSE 8080