FROM alpine:latest
RUN apk add maven
COPY . .
RUN mvnw clean package -X -DskipTests
ENTRYPOINT [ "java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar" ]