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
                    docker.build("local-ai-buddy:${env.BUILD_NUMBER}")
                }
            }
        }
        // stage ('Login docker hub') {
        //     echo "logging in docker hub..."
        //     steps {
        //         script {
        //             docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-id')
        //         }
        //     }
        // }
        stage ('Push docker image') {
            steps {
                echo "pushing image to docker hub"
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-id') {
                        docker.image("local-ai-buddy:${env.BUILD_NUMBER}").push()
                    }
                }
        }
        }
    }
}
