# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
 
#  The  Dockerfile  is divided into two stages: the build stage and the production stage. The build stage uses the  node:18-alpine  image to install the dependencies and build the React app. The production stage uses the  nginx:stable-alpine  image to serve the static files generated in the build stage. 
#  The  COPY --from=build /app/build /usr/share/nginx/html  command copies the static files from the build stage to the  /usr/share/nginx/html  directory in the production stage. 
#  The  EXPOSE 80  command exposes port 80, and the  CMD ["nginx", "-g", "daemon off;"]  command starts the Nginx server. 
#  Step 3: Build the Docker Image 
#  To build the Docker image, run the following command: 
#  docker build -t react-app .
 
#  The  -t  flag is used to tag the image with the name  react-app . 
#  Step 4: Run the Docker Container 
#  To run the Docker container, run the following command: 
#  docker run -d -p 3000:80 react-app
 
#  The  -d  flag is used to run the container in detached mode, and the  -p  flag is used to map port 3000 on the host machine to port 80 in the container. 
#  Open your browser and navigate to  http://localhost:3000  to view the React app. 

#https://www.docker.com/blog/how-to-dockerize-react-app/
