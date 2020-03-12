pipeline {
    agent any
    environment {
        PROJECT_ID = 'trial-demo-dev'
        CLUSTER_NAME = 'nodejs-cluster'
        LOCATION = 'us-central1-a'
        CREDENTIALS_ID = 'trial-demo-dev'
        REGISTRY= 'dedyyyy/trial-demo-dev'
        DOCKER_CREDENTIAL = 'dockerhub'
        IMAGE_VERSION =':3.0.0'
    }
    stages {
        stage('Building image') {
            steps{
                script {
                dockerImage = docker.build registry + env.IMAGE_VERSION
                }
            }
        }
        stage('Deploy Image') {
            steps{    
                script {
                docker.withRegistry( '', env.DOCKER_CREDENTIAL ) {
                    dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy to GKE') {
            steps{
                step([
                $class: 'KubernetesEngineBuilder',
                projectId: env.PROJECT_ID,
                clusterName: env.CLUSTER_NAME,
                location: env.LOCATION,
                manifestPattern: 'Deployment.yaml',
                credentialsId: env.CREDENTIALS_ID,
                verifyDeployments: true])
            }
        }
    }
}
