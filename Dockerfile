FROM node:latest

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN cd backend

RUN npm install

RUN cd ..

RUN npm install

EXPOSE 3000
EXPOSE 4200

CMD ["./init-docker.sh"]

