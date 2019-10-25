FROM node:10.15 as builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY . ./

ARG API_URL=test
ENV API_URL=$API_URL
RUN echo $API_URL

RUN yarn
RUN yarn build

# EXPOSE 80

FROM nginx
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
