FROM openjdk:26-ea-3-jdk-slim-bookworm
WORKDIR /app
COPY  target/voting-*-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]