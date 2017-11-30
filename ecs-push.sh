#!/bin/sh
$(aws ecr get-login --region us-west-2 --profile pp --no-include-email)
docker build -t docker-starter .
docker tag docker-starter:latest 441599757612.dkr.ecr.us-west-2.amazonaws.com/docker-starter:latest
docker push 441599757612.dkr.ecr.us-west-2.amazonaws.com/docker-starter:latest
aws ecs stop-task --profile pp --cluster pretty-pallets --region us-west-2 --task $(aws ecs list-tasks --profile lucio --cluster prototypes --family docker-starter --region us-west-1 | grep arn | sed 's/"//g' | awk '{print $1}') | grep 'desiredStatus\|taskDefinitionArn'
