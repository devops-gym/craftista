# Use the official Golang image as a base image
FROM golang:1.20 

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o app

EXPOSE 9000

CMD ["./app"]
