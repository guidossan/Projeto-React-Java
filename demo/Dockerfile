FROM eclipse-temurin:17.0.8.1_1-jdk-jammy
COPY . .
RUN ./mvnw clean package -X -DskipTests
ENTRYPOINT [ "java", "-jar", "target/*.jar" ]