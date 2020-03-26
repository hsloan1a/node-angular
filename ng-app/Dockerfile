FROM node:lts-slim
RUN mkdir -p /ng-app
WORKDIR /ng-app/
COPY ./ /ng-app/
RUN npm install
RUN npm install -g  @angular/cli@9.0.7
CMD ["ng", "serve"]