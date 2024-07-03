FROM eclipse-temurin:17.0.8.1_1-jdk-jammy
COPY . .
RUN mkdir app
WORKDIR /app
ENTRYPOINT [ "java", "-jar", "target/*.jar" ]