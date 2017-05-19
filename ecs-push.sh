#!/bin/sh
$(aws ecr get-login --region us-west-1 --profile lucio)
docker build -t docker-starter .
docker tag docker-starter:latest 613530814445.dkr.ecr.us-west-1.amazonaws.com/docker-starter:latest
docker push 613530814445.dkr.ecr.us-west-1.amazonaws.com/docker-starter:latest
aws ecs stop-task --profile lucio --cluster prototypes --region us-west-1 --task $(aws ecs list-tasks --profile lucio --cluster prototypes --family docker-starter --region us-west-1 | grep arn | sed 's/"//g' | awk '{print $1}') | grep 'desiredStatus\|taskDefinitionArn'
