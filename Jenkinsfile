pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = "757709777104"
        AWS_DEFAULT_REGION = "us-east-1"
        IMAGE_REPO_NAME = "myapp"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Clone Source') {
            steps {
                git 'https://github.com/battutanusha05-bit/myapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_REPO_NAME:$IMAGE_TAG .'
            }
        }

        stage('Tag Docker Image') {
            steps {
                sh 'docker tag $IMAGE_REPO_NAME:$IMAGE_TAG $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG'
            }
        }

        stage('Push Image to ECR') {
            steps {
                withAWS(credentials: 'aws-creds', region: 'us-east-1') {

                    sh '''
                    aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com

                    docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG
                    '''
                }
            }
        }
    }
}
