#!/bin/bash

rm -rf src/protos/gen
yarn proto-loader-gen-types --longs=String --enums=String --defaults --keepCase --oneofs --grpcLib=@grpc/grpc-js --outDir=src/protos/gen src/protos/questionnaire.proto src/protos/services.proto