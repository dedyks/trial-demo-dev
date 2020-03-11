pipeline {
    agent any
    environment {
        PROJECT_ID = 'trial-demo-dev'
        CLUSTER_NAME = 'nodejs-cluster'
        LOCATION = 'us-central1-a'
        CREDENTIALS_ID = 'trial-demo-dev'
    }
    stages {
        stage('Deploy to GKE') {
            steps{
                step([
                $class: 'KubernetesEngineBuilder',
                projectId: env.PROJECT_ID,
                clusterName: env.CLUSTER_NAME,
                location: env.LOCATION,
                manifestPattern: 'deployment.yaml',
                credentialsId: env.CREDENTIALS_ID,
                verifyDeployments: true])
            }
        }
    }
}