pipeline {
    agent any
    environment {
        PROJECT_ID = 'trial-demo-dev'
        CLUSTER_NAME = 'nodejs-cluster'
        LOCATION = 'us-central1-a'
        CREDENTIALS_ID = 'trial-demo-dev'
        REGISTRY= 'dedyyyy/trial-demo-dev'
        DOCKER_CREDENTIAL = 'dockerhub'
    }
    stages {
        stage('Building image') {
            steps{
                script {
                docker.build registry + ':3.0.0'
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
