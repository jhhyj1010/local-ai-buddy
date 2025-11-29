pipeline {
    agent any
    stages {
        stage ('Initialization') {
            steps {
                echo "hello Jesson"
            }
        }
        stage ('Build Docker Image') {
            steps {
                echo "building docker image..."
                script {
                    docker.build("jesson1018/local-ai-buddy:${env.BUILD_NUMBER}")
                }
            }
        }
        stage ('Push docker image') {
            steps {
                echo "pushing image to docker hub..."
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB_CREDENTIALS') {
                        docker.image("jesson1018/local-ai-buddy:${env.BUILD_NUMBER}").push()
                    }
                }
        }
        }
    }
}
