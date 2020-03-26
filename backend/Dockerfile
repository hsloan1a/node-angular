FROM node:lts-slim
RUN mkdir -p /backend
WORKDIR /backend/
COPY ./ /backend/
RUN ls
RUN npm install
CMD ["nodemon"]