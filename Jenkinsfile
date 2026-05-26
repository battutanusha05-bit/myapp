pipeline {
    agent any

    environment {
        IMAGE_NAME = "myapp-image"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop myapp || true'
                sh 'docker rm myapp || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                --name myapp \
                -p 80:3000 \
                $IMAGE_NAME
                '''
            }
        }
    }
}
